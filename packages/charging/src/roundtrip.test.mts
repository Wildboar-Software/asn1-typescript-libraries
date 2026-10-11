import {
    ASN1OverflowError,
    ASN1SizeError,
    ASN1TagClass,
    ObjectIdentifier,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ChargingTariffInformation,
    _decode_ChargingTariffInformation,
    _encode_ChargingTariffInformation,
} from "./lib/modules/Tariffing-Data-Types/ChargingTariffInformation.ta.mjs";
import { CommunicationChargeCurrency } from "./lib/modules/Tariffing-Data-Types/CommunicationChargeCurrency.ta.mjs";
import { CriticalityType_ignore } from "./lib/modules/Tariffing-Data-Types/CriticalityType.ta.mjs";
import { CurrencyFactorScale } from "./lib/modules/Tariffing-Data-Types/CurrencyFactorScale.ta.mjs";
import { Currency_euro } from "./lib/modules/Tariffing-Data-Types/Currency.ta.mjs";
import { ExtensionField } from "./lib/modules/Tariffing-Data-Types/ExtensionField.ta.mjs";
import { ChargingReferenceIdentification } from "./lib/modules/Tariffing-Data-Types/ChargingReferenceIdentification.ta.mjs";
import { TariffCurrency } from "./lib/modules/Tariffing-Data-Types/TariffCurrency.ta.mjs";
import { TariffCurrencyFormat } from "./lib/modules/Tariffing-Data-Types/TariffCurrencyFormat.ta.mjs";
import { TariffSwitchCurrency } from "./lib/modules/Tariffing-Data-Types/TariffSwitchCurrency.ta.mjs";
import {
    TariffCurrencyFormat_tariffControlIndicators_non_cyclicTariff,
    TariffPulseFormat_tariffControlIndicators_non_cyclicTariff,
} from "./index.mjs";
import * as charging from "./index.mjs";
import { _decode_CurrencyFactor } from "./lib/modules/Tariffing-Data-Types/CurrencyFactor.ta.mjs";
import { _decode_ChargingControlIndicators } from "./lib/modules/Tariffing-Data-Types/ChargingControlIndicators.ta.mjs";

function reference(network: number[], id: number): ChargingReferenceIdentification {
    return new ChargingReferenceIdentification(ObjectIdentifier.fromParts(network), id);
}

describe("Tariffing-Data-Types encode/decode round-trips", () => {
    test("round-trips ChargingTariffInformation with a currency tariff switch and one extension", () => {
        const currentCharge = new CommunicationChargeCurrency(
            new CurrencyFactorScale(250, -2),
            60,
            new Uint8ClampedArray([1]),
        );
        const nextCharge = new CommunicationChargeCurrency(
            new CurrencyFactorScale(10, 0),
            0,
            new Uint8ClampedArray([0]),
        );
        const original = new ChargingTariffInformation(
            new Uint8ClampedArray([1, 0, 1]),
            {
                tariffCurrency: new TariffCurrency(
                    new TariffCurrencyFormat(
                        [currentCharge],
                        new Uint8ClampedArray([0]),
                        new CurrencyFactorScale(5, -3),
                        undefined,
                    ),
                    new TariffSwitchCurrency(
                        new TariffCurrencyFormat(
                            [nextCharge],
                            new Uint8ClampedArray([1]),
                            undefined,
                            new CurrencyFactorScale(1, 1),
                        ),
                        new Uint8Array([4]),
                    ),
                ),
            },
            [
                new ExtensionField(
                    { local: 1 },
                    CriticalityType_ignore,
                    $._encodeNull(null, $.BER),
                ),
            ],
            reference([0, 2, 1, 1, 1], 42),
            reference([0, 2, 1, 1, 2], 99),
            Currency_euro,
        );
        const decoded = _decode_ChargingTariffInformation(_encode_ChargingTariffInformation(original, $.BER));
        expect(Array.from(decoded.chargingControlIndicators)).toEqual([1, 0, 1]);
        expect("tariffCurrency" in decoded.chargingTariff).toBe(true);
        if (!("tariffCurrency" in decoded.chargingTariff)) {
            return;
        }
        const current = decoded.chargingTariff.tariffCurrency.currentTariffCurrency;
        const next = decoded.chargingTariff.tariffCurrency.tariffSwitchCurrency;
        expect(current?.communicationChargeSequenceCurrency).toHaveLength(1);
        expect(current?.communicationChargeSequenceCurrency?.[0].currencyFactorScale.currencyFactor).toBe(250);
        expect(current?.communicationChargeSequenceCurrency?.[0].currencyFactorScale.currencyScale).toBe(-2);
        expect(current?.communicationChargeSequenceCurrency?.[0].tariffDuration).toBe(60);
        expect(Array.from(current?.communicationChargeSequenceCurrency?.[0].subTariffControl ?? [])).toEqual([1]);
        expect(Array.from(current?.tariffControlIndicators ?? [])).toEqual([0]);
        expect(current?.callAttemptChargeCurrency?.currencyFactor).toBe(5);
        expect(current?.callAttemptChargeCurrency?.currencyScale).toBe(-3);
        expect(current?.callSetupChargeCurrency).toBeUndefined();
        expect(next?.nextTariffCurrency.communicationChargeSequenceCurrency?.[0].tariffDuration).toBe(0);
        expect(Array.from(next?.nextTariffCurrency.tariffControlIndicators ?? [])).toEqual([1]);
        expect(next?.nextTariffCurrency.callSetupChargeCurrency?.currencyFactor).toBe(1);
        expect(next?.nextTariffCurrency.callSetupChargeCurrency?.currencyScale).toBe(1);
        expect(Array.from(next?.tariffSwitchoverTime ?? [])).toEqual([4]);
        expect(decoded.extensions).toHaveLength(1);
        expect(decoded.extensions?.[0].type_).toEqual({ local: 1 });
        expect(decoded.extensions?.[0].criticality).toBe(CriticalityType_ignore);
        // IMPLICIT TAGS rewrites the open type's NULL tag to context [1].
        expect(decoded.extensions?.[0].value.tagClass).toBe(ASN1TagClass.context);
        expect(decoded.extensions?.[0].value.tagNumber).toBe(1);
        expect(decoded.extensions?.[0].value.value.byteLength).toBe(0);
        expect(decoded.originationIdentification.networkIdentification.toString()).toBe("0.2.1.1.1");
        expect(decoded.originationIdentification.referenceID).toBe(42);
        expect(decoded.destinationIdentification?.networkIdentification.toString()).toBe("0.2.1.1.2");
        expect(decoded.destinationIdentification?.referenceID).toBe(99);
        expect(decoded.currency).toBe(Currency_euro);
    });

    test("rejects an empty extensions list and out-of-range primitive values", () => {
        const minimal = new ChargingTariffInformation(
            new Uint8ClampedArray([0]),
            {
                tariffCurrency: new TariffCurrency(undefined, undefined),
            },
            undefined,
            reference([0, 2, 1], 0),
            undefined,
            Currency_euro,
        );
        expect(() => new ChargingTariffInformation(
            minimal.chargingControlIndicators,
            minimal.chargingTariff,
            [],
            minimal.originationIdentification,
            undefined,
            minimal.currency,
        )).toThrow(ASN1SizeError);
        expect(() => _decode_CurrencyFactor($._encodeInteger(1000000, $.BER))).toThrow(ASN1OverflowError);
        expect(() => _decode_ChargingControlIndicators(
            $._encodeBitString(new Uint8ClampedArray(9), $.BER),
        )).toThrow(ASN1SizeError);
    });

    test("exports long named bits and omits the colliding short form", () => {
        expect(TariffCurrencyFormat_tariffControlIndicators_non_cyclicTariff).toBe(0);
        expect(TariffPulseFormat_tariffControlIndicators_non_cyclicTariff).toBe(0);
        expect("non_cyclicTariff" in charging).toBe(false);
    });
});

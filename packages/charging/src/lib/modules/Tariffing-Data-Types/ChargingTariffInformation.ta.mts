/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChargingControlIndicators, _decode_ChargingControlIndicators, _encode_ChargingControlIndicators } from "../Tariffing-Data-Types/ChargingControlIndicators.ta.mjs";
import { ChargingTariffInformation_chargingTariff, _decode_ChargingTariffInformation_chargingTariff, _encode_ChargingTariffInformation_chargingTariff } from "../Tariffing-Data-Types/ChargingTariffInformation-chargingTariff.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Tariffing-Data-Types/ExtensionField.ta.mjs";
import { ChargingReferenceIdentification, _decode_ChargingReferenceIdentification, _encode_ChargingReferenceIdentification } from "../Tariffing-Data-Types/ChargingReferenceIdentification.ta.mjs";
import { Currency, _decode_Currency, _encode_Currency, _enum_for_Currency } from "../Tariffing-Data-Types/Currency.ta.mjs";
import { numOfExtensions } from "../Tariffing-Data-Types/numOfExtensions.va.mjs";


/**
 * @summary ChargingTariffInformation
 * @description
 *
 * CRGT request or indication. Explicit tariff data for the
 * originating subscriber exchange and the charge registration
 * exchange, during call set-up and in the active phase. The first
 * CRGT fixes the format, currency or pulse, for the whole call.
 * Later CRGT or AOCRG messages in the other format are rejected.
 *
 * During set-up a new CRGT replaces the previous one, up to Answer.
 * After charging has started, a CRGT changes the current tariff,
 * supplies or replaces the next tariff and its switch-over time, or
 * deletes that next tariff by sending the current tariff alone.
 * A next tariff more than 23 hours and 45 minutes ahead is not
 * sent; one that will be needed is sent at least 12 minutes before
 * the switch, or at least before it (clauses 6.1.2 and 6.1.3).
 *
 * The charge determination point starts timer Tcrga (6 s to 15 s)
 * when it sends this message and does not send another CRGT or
 * AOCRG while the timer runs (clauses 6.1.4 and 10).
 *
 * [ES 201 296 V1.3.1, clauses 6.1.1, 6.1.2, and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingTariffInformation ::= SEQUENCE {
 *     chargingControlIndicators [0] ChargingControlIndicators,
 *     chargingTariff [1] CHOICE {
 *         tariffCurrency [0] TariffCurrency,
 *         tariffPulse [1] TariffPulse
 *     },
 *     extensions [2] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField OPTIONAL,
 *     originationIdentification [3] ChargingReferenceIdentification,
 *     destinationIdentification [4] ChargingReferenceIdentification OPTIONAL,
 *     currency [5] Currency
 * }
 * ```
 * 
 * @class
 */
export
class ChargingTariffInformation {
    constructor (
        /**
         * Advice of charge versus subscriber charging, whether an
         * immediate tariff change restarts charging, and whether
         * tariffing waits for START. See
         * {@link ChargingControlIndicators}.
         * @public
         * @readonly
         */
        readonly chargingControlIndicators: ChargingControlIndicators,
        /**
         * The tariff, in currency or in meter pulses. The choice on
         * the first CRGT is the format of every later charging
         * message for the call. See
         * {@link ChargingTariffInformation_chargingTariff}.
         * @public
         * @readonly
         */
        readonly chargingTariff: ChargingTariffInformation_chargingTariff,
        /**
         * Network-operator extension. This module allows one
         * (`numOfExtensions`), and marks that limit network specific.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>,
        /**
         * Charging reference of the sender. On the first CRGT this
         * is the determination point's identifier and
         * `destinationIdentification` is absent. Later CRGT messages
         * for the same tariff determination instance keep this value
         * and add the registration or generation point's identifier
         * as the destination. See clause 6.4.1.
         * @public
         * @readonly
         */
        readonly originationIdentification: ChargingReferenceIdentification,
        /**
         * Charging reference of the other exchange. Absent on the
         * first CRGT. Present on every later CRGT for that tariff
         * determination instance (clause 6.4.1). A CRGT whose
         * destination is not allocated, or whose identifier pair is
         * wrong, is not accepted (clause 6.3.9).
         * @public
         * @readonly
         */
        readonly destinationIdentification: OPTIONAL<ChargingReferenceIdentification>,
        /**
         * Currency named for this message. Which currency a network
         * uses is outside this specification (clause 1).
         * `noIndication` means none is indicated. Clause 9 does not
         * say what to put here when the tariff is in pulse format.
         * @public
         * @readonly
         */
        readonly currency: Currency
    ) {
        if (extensions !== undefined && (extensions.length < 1 || extensions.length > Number(numOfExtensions))) {
            throw new ASN1SizeError("ChargingTariffInformation.extensions violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ChargingTariffInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ChargingTariffInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargingTariffInformation`.
     * @returns {ChargingTariffInformation}
     */
    public static _from_object (_o: { [_K in keyof (ChargingTariffInformation)]: (ChargingTariffInformation)[_K] }): ChargingTariffInformation {
        return new ChargingTariffInformation(_o.chargingControlIndicators, _o.chargingTariff, _o.extensions, _o.originationIdentification, _o.destinationIdentification, _o.currency);
    }

        /**
         * @summary The enum used as the type of the component `currency`
         * @public
         * @static
         */

    public static _enum_for_currency = _enum_for_Currency;
}

/**
 * @summary The Leading Root Component Types of ChargingTariffInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargingTariffInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("chargingControlIndicators", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("chargingTariff", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originationIdentification", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("destinationIdentification", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("currency", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ChargingTariffInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargingTariffInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargingTariffInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargingTariffInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargingTariffInformation: $.ASN1Decoder<ChargingTariffInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingTariffInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingTariffInformation (el: _Element): ChargingTariffInformation {
    if (!_cached_decoder_for_ChargingTariffInformation) { _cached_decoder_for_ChargingTariffInformation = function (el: _Element): ChargingTariffInformation {
    let chargingControlIndicators!: ChargingControlIndicators;
    let chargingTariff!: ChargingTariffInformation_chargingTariff;
    let extensions: OPTIONAL<ExtensionField[]>;
    let originationIdentification!: ChargingReferenceIdentification;
    let destinationIdentification: OPTIONAL<ChargingReferenceIdentification>;
    let currency!: Currency;
    const callbacks: $.DecodingMap = {
        "chargingControlIndicators": (_el: _Element): void => { chargingControlIndicators = $._decode_implicit<ChargingControlIndicators>(() => _decode_ChargingControlIndicators)(_el); },
        "chargingTariff": (_el: _Element): void => { chargingTariff = $._decode_explicit<ChargingTariffInformation_chargingTariff>(() => _decode_ChargingTariffInformation_chargingTariff)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "originationIdentification": (_el: _Element): void => { originationIdentification = $._decode_implicit<ChargingReferenceIdentification>(() => _decode_ChargingReferenceIdentification)(_el); },
        "destinationIdentification": (_el: _Element): void => { destinationIdentification = $._decode_implicit<ChargingReferenceIdentification>(() => _decode_ChargingReferenceIdentification)(_el); },
        "currency": (_el: _Element): void => { currency = $._decode_implicit<Currency>(() => _decode_Currency)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChargingTariffInformation,
        _extension_additions_list_spec_for_ChargingTariffInformation,
        _root_component_type_list_2_spec_for_ChargingTariffInformation,
        undefined,
    );
    return new ChargingTariffInformation(
        chargingControlIndicators,
        chargingTariff,
        extensions,
        originationIdentification,
        destinationIdentification,
        currency
    );
}; }
    return _cached_decoder_for_ChargingTariffInformation(el);
}

let _cached_encoder_for_ChargingTariffInformation: $.ASN1Encoder<ChargingTariffInformation> | null = null;

/**
 * @summary Encodes a(n) ChargingTariffInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingTariffInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingTariffInformation (value: ChargingTariffInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingTariffInformation) { _cached_encoder_for_ChargingTariffInformation = function (value: ChargingTariffInformation, _elGetter: $.ASN1Encoder<ChargingTariffInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ChargingControlIndicators, $.BER)(value.chargingControlIndicators, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ChargingTariffInformation_chargingTariff, $.BER)(value.chargingTariff, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ChargingReferenceIdentification, $.BER)(value.originationIdentification, $.BER),
            /* IF_ABSENT  */ ((value.destinationIdentification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ChargingReferenceIdentification, $.BER)(value.destinationIdentification, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Currency, $.BER)(value.currency, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChargingTariffInformation(value, elGetter);
}


/* eslint-enable */

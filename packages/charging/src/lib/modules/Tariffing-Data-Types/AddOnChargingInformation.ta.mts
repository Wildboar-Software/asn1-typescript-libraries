/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChargingControlIndicators, _decode_ChargingControlIndicators, _encode_ChargingControlIndicators } from "../Tariffing-Data-Types/ChargingControlIndicators.ta.mjs";
// export { ChargingControlIndicators, ChargingControlIndicators_subscriberCharge /* IMPORTED_LONG_NAMED_BIT */, subscriberCharge /* IMPORTED_SHORT_NAMED_BIT */, ChargingControlIndicators_immediateChangeOfActuallyAppliedTariff /* IMPORTED_LONG_NAMED_BIT */, immediateChangeOfActuallyAppliedTariff /* IMPORTED_SHORT_NAMED_BIT */, ChargingControlIndicators_delayUntilStart /* IMPORTED_LONG_NAMED_BIT */, delayUntilStart /* IMPORTED_SHORT_NAMED_BIT */, _decode_ChargingControlIndicators, _encode_ChargingControlIndicators } from "../Tariffing-Data-Types/ChargingControlIndicators.ta.mjs";
import { AddOnChargingInformation_addOncharge, _decode_AddOnChargingInformation_addOncharge, _encode_AddOnChargingInformation_addOncharge } from "../Tariffing-Data-Types/AddOnChargingInformation-addOncharge.ta.mjs";
// export { AddOnChargingInformation_addOncharge, _decode_AddOnChargingInformation_addOncharge, _encode_AddOnChargingInformation_addOncharge } from "../Tariffing-Data-Types/AddOnChargingInformation-addOncharge.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Tariffing-Data-Types/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Tariffing-Data-Types/ExtensionField.ta.mjs";
import { ChargingReferenceIdentification, _decode_ChargingReferenceIdentification, _encode_ChargingReferenceIdentification } from "../Tariffing-Data-Types/ChargingReferenceIdentification.ta.mjs";
// export { ChargingReferenceIdentification, _decode_ChargingReferenceIdentification, _encode_ChargingReferenceIdentification } from "../Tariffing-Data-Types/ChargingReferenceIdentification.ta.mjs";
import { Currency, _decode_Currency, _encode_Currency, _enum_for_Currency } from "../Tariffing-Data-Types/Currency.ta.mjs";
// export { Currency, _enum_for_Currency, Currency_noIndication /* IMPORTED_LONG_ENUMERATION_ITEM */, noIndication /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_australianDollar /* IMPORTED_LONG_ENUMERATION_ITEM */, australianDollar /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_austrianSchilling /* IMPORTED_LONG_ENUMERATION_ITEM */, austrianSchilling /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_belgianFranc /* IMPORTED_LONG_ENUMERATION_ITEM */, belgianFranc /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_britishPound /* IMPORTED_LONG_ENUMERATION_ITEM */, britishPound /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_czechKoruna /* IMPORTED_LONG_ENUMERATION_ITEM */, czechKoruna /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_danishKrone /* IMPORTED_LONG_ENUMERATION_ITEM */, danishKrone /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_dutchGuilder /* IMPORTED_LONG_ENUMERATION_ITEM */, dutchGuilder /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_euro /* IMPORTED_LONG_ENUMERATION_ITEM */, euro /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_finnishMarkka /* IMPORTED_LONG_ENUMERATION_ITEM */, finnishMarkka /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_frenchFranc /* IMPORTED_LONG_ENUMERATION_ITEM */, frenchFranc /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_germanMark /* IMPORTED_LONG_ENUMERATION_ITEM */, germanMark /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_greekDrachma /* IMPORTED_LONG_ENUMERATION_ITEM */, greekDrachma /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_hungarianForint /* IMPORTED_LONG_ENUMERATION_ITEM */, hungarianForint /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_irishPunt /* IMPORTED_LONG_ENUMERATION_ITEM */, irishPunt /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_italianLira /* IMPORTED_LONG_ENUMERATION_ITEM */, italianLira /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_japaneseYen /* IMPORTED_LONG_ENUMERATION_ITEM */, japaneseYen /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_luxembourgian_Franc /* IMPORTED_LONG_ENUMERATION_ITEM */, luxembourgian_Franc /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_norwegianKrone /* IMPORTED_LONG_ENUMERATION_ITEM */, norwegianKrone /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_polishZloty /* IMPORTED_LONG_ENUMERATION_ITEM */, polishZloty /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_portugeseEscudo /* IMPORTED_LONG_ENUMERATION_ITEM */, portugeseEscudo /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_russianRouble /* IMPORTED_LONG_ENUMERATION_ITEM */, russianRouble /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_slovakKoruna /* IMPORTED_LONG_ENUMERATION_ITEM */, slovakKoruna /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_spanishPeseta /* IMPORTED_LONG_ENUMERATION_ITEM */, spanishPeseta /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_swedishKrone /* IMPORTED_LONG_ENUMERATION_ITEM */, swedishKrone /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_swissFranc /* IMPORTED_LONG_ENUMERATION_ITEM */, swissFranc /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_turkishLira /* IMPORTED_LONG_ENUMERATION_ITEM */, turkishLira /* IMPORTED_SHORT_ENUMERATION_ITEM */, Currency_uSDollar /* IMPORTED_LONG_ENUMERATION_ITEM */, uSDollar /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Currency, _encode_Currency } from "../Tariffing-Data-Types/Currency.ta.mjs";


/**
 * @summary AddOnChargingInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddOnChargingInformation ::= SEQUENCE {
 *     chargingControlIndicators    [0] ChargingControlIndicators ,
 *     addOncharge                    [1] CHOICE {
 *         addOnChargeCurrency        [0] CurrencyFactorScale ,
 *         addOnChargePulse        [1] PulseUnits
 *     },
 *     extensions [2] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField OPTIONAL,
 *     originationIdentification    [3] ChargingReferenceIdentification,
 *     destinationIdentification    [4] ChargingReferenceIdentification OPTIONAL,
 *     currency                    [5] Currency
 * }
 * ```
 * 
 * @class
 */
export
class AddOnChargingInformation {
    constructor (
        /**
         * @summary `chargingControlIndicators`.
         * @public
         * @readonly
         */
        readonly chargingControlIndicators: ChargingControlIndicators,
        /**
         * @summary `addOncharge`.
         * @public
         * @readonly
         */
        readonly addOncharge: AddOnChargingInformation_addOncharge,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>,
        /**
         * @summary `originationIdentification`.
         * @public
         * @readonly
         */
        readonly originationIdentification: ChargingReferenceIdentification,
        /**
         * @summary `destinationIdentification`.
         * @public
         * @readonly
         */
        readonly destinationIdentification: OPTIONAL<ChargingReferenceIdentification>,
        /**
         * @summary `currency`.
         * @public
         * @readonly
         */
        readonly currency: Currency
    ) {}

    /**
     * @summary Restructures an object into a AddOnChargingInformation
     * @description
     * 
     * This takes an `object` and converts it to a `AddOnChargingInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddOnChargingInformation`.
     * @returns {AddOnChargingInformation}
     */
    public static _from_object (_o: { [_K in keyof (AddOnChargingInformation)]: (AddOnChargingInformation)[_K] }): AddOnChargingInformation {
        return new AddOnChargingInformation(_o.chargingControlIndicators, _o.addOncharge, _o.extensions, _o.originationIdentification, _o.destinationIdentification, _o.currency);
    }

        /**
         * @summary The enum used as the type of the component `currency`
         * @public
         * @static
         */

    public static _enum_for_currency = _enum_for_Currency;
}

/**
 * @summary The Leading Root Component Types of AddOnChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AddOnChargingInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("chargingControlIndicators", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("addOncharge", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originationIdentification", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("destinationIdentification", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("currency", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of AddOnChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AddOnChargingInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AddOnChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AddOnChargingInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AddOnChargingInformation: $.ASN1Decoder<AddOnChargingInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddOnChargingInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddOnChargingInformation (el: _Element): AddOnChargingInformation {
    if (!_cached_decoder_for_AddOnChargingInformation) { _cached_decoder_for_AddOnChargingInformation = function (el: _Element): AddOnChargingInformation {
    let chargingControlIndicators!: ChargingControlIndicators;
    let addOncharge!: AddOnChargingInformation_addOncharge;
    let extensions: OPTIONAL<ExtensionField[]>;
    let originationIdentification!: ChargingReferenceIdentification;
    let destinationIdentification: OPTIONAL<ChargingReferenceIdentification>;
    let currency!: Currency;
    const callbacks: $.DecodingMap = {
        "chargingControlIndicators": (_el: _Element): void => { chargingControlIndicators = $._decode_implicit<ChargingControlIndicators>(() => _decode_ChargingControlIndicators)(_el); },
        "addOncharge": (_el: _Element): void => { addOncharge = $._decode_explicit<AddOnChargingInformation_addOncharge>(() => _decode_AddOnChargingInformation_addOncharge)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "originationIdentification": (_el: _Element): void => { originationIdentification = $._decode_implicit<ChargingReferenceIdentification>(() => _decode_ChargingReferenceIdentification)(_el); },
        "destinationIdentification": (_el: _Element): void => { destinationIdentification = $._decode_implicit<ChargingReferenceIdentification>(() => _decode_ChargingReferenceIdentification)(_el); },
        "currency": (_el: _Element): void => { currency = $._decode_implicit<Currency>(() => _decode_Currency)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AddOnChargingInformation,
        _extension_additions_list_spec_for_AddOnChargingInformation,
        _root_component_type_list_2_spec_for_AddOnChargingInformation,
        undefined,
    );
    return new AddOnChargingInformation(
        chargingControlIndicators,
        addOncharge,
        extensions,
        originationIdentification,
        destinationIdentification,
        currency
    );
}; }
    return _cached_decoder_for_AddOnChargingInformation(el);
}

let _cached_encoder_for_AddOnChargingInformation: $.ASN1Encoder<AddOnChargingInformation> | null = null;

/**
 * @summary Encodes a(n) AddOnChargingInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddOnChargingInformation, encoded as an ASN.1 Element.
 */
export
function _encode_AddOnChargingInformation (value: AddOnChargingInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddOnChargingInformation) { _cached_encoder_for_AddOnChargingInformation = function (value: AddOnChargingInformation, elGetter: $.ASN1Encoder<AddOnChargingInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ChargingControlIndicators, $.BER)(value.chargingControlIndicators, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_AddOnChargingInformation_addOncharge, $.BER)(value.addOncharge, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ChargingReferenceIdentification, $.BER)(value.originationIdentification, $.BER),
            /* IF_ABSENT  */ ((value.destinationIdentification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ChargingReferenceIdentification, $.BER)(value.destinationIdentification, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Currency, $.BER)(value.currency, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AddOnChargingInformation(value, elGetter);
}


/* eslint-enable */

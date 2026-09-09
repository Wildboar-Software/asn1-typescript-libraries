/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { SFBillingChargingCharacteristics, _decode_SFBillingChargingCharacteristics, _encode_SFBillingChargingCharacteristics } from "../Core-INAP-CS1-DataTypes/SFBillingChargingCharacteristics.ta.mjs";
// export { SFBillingChargingCharacteristics, _decode_SFBillingChargingCharacteristics, _encode_SFBillingChargingCharacteristics } from "../Core-INAP-CS1-DataTypes/SFBillingChargingCharacteristics.ta.mjs";
import { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../Core-INAP-CS1-DataTypes/InformationToSend.ta.mjs";
// export { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../Core-INAP-CS1-DataTypes/InformationToSend.ta.mjs";
import { MaximumNumberOfCounters, _decode_MaximumNumberOfCounters, _encode_MaximumNumberOfCounters } from "../Core-INAP-CS1-DataTypes/MaximumNumberOfCounters.ta.mjs";
// export { MaximumNumberOfCounters, _decode_MaximumNumberOfCounters, _encode_MaximumNumberOfCounters } from "../Core-INAP-CS1-DataTypes/MaximumNumberOfCounters.ta.mjs";
import { Cause, _decode_Cause, _encode_Cause } from "../Core-INAP-CS1-DataTypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../Core-INAP-CS1-DataTypes/Cause.ta.mjs";


/**
 * @summary FilteredCallTreatment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FilteredCallTreatment ::= SEQUENCE {
 *      sFBillingChargingCharacteristics     [0] SFBillingChargingCharacteristics,
 *      informationToSend     [1] InformationToSend     OPTIONAL,
 *      maximumNumberOfCounters     [2] MaximumNumberOfCounters     OPTIONAL,
 *      releaseCause     [3] Cause     OPTIONAL
 *      }
 * ```
 * 
 * @class
 */
export
class FilteredCallTreatment {
    constructor (
        /**
         * @summary `sFBillingChargingCharacteristics`.
         * @public
         * @readonly
         */
        readonly sFBillingChargingCharacteristics: SFBillingChargingCharacteristics,
        /**
         * @summary `informationToSend`.
         * @public
         * @readonly
         */
        readonly informationToSend: OPTIONAL<InformationToSend>,
        /**
         * @summary `maximumNumberOfCounters`.
         * @public
         * @readonly
         */
        readonly maximumNumberOfCounters: OPTIONAL<MaximumNumberOfCounters>,
        /**
         * @summary `releaseCause`.
         * @public
         * @readonly
         */
        readonly releaseCause: OPTIONAL<Cause>
    ) {}

    /**
     * @summary Restructures an object into a FilteredCallTreatment
     * @description
     * 
     * This takes an `object` and converts it to a `FilteredCallTreatment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FilteredCallTreatment`.
     * @returns {FilteredCallTreatment}
     */
    public static _from_object (_o: { [_K in keyof (FilteredCallTreatment)]: (FilteredCallTreatment)[_K] }): FilteredCallTreatment {
        return new FilteredCallTreatment(_o.sFBillingChargingCharacteristics, _o.informationToSend, _o.maximumNumberOfCounters, _o.releaseCause);
    }


}

/**
 * @summary The Leading Root Component Types of FilteredCallTreatment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FilteredCallTreatment: $.ComponentSpec[] = [
    new $.ComponentSpec("sFBillingChargingCharacteristics", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("informationToSend", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("maximumNumberOfCounters", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of FilteredCallTreatment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FilteredCallTreatment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FilteredCallTreatment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FilteredCallTreatment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FilteredCallTreatment: $.ASN1Decoder<FilteredCallTreatment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FilteredCallTreatment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FilteredCallTreatment (el: _Element): FilteredCallTreatment {
    if (!_cached_decoder_for_FilteredCallTreatment) { _cached_decoder_for_FilteredCallTreatment = function (el: _Element): FilteredCallTreatment {
    let sFBillingChargingCharacteristics!: SFBillingChargingCharacteristics;
    let informationToSend: OPTIONAL<InformationToSend>;
    let maximumNumberOfCounters: OPTIONAL<MaximumNumberOfCounters>;
    let releaseCause: OPTIONAL<Cause>;
    const callbacks: $.DecodingMap = {
        "sFBillingChargingCharacteristics": (_el: _Element): void => { sFBillingChargingCharacteristics = $._decode_implicit<SFBillingChargingCharacteristics>(() => _decode_SFBillingChargingCharacteristics)(_el); },
        "informationToSend": (_el: _Element): void => { informationToSend = $._decode_explicit<InformationToSend>(() => _decode_InformationToSend)(_el); },
        "maximumNumberOfCounters": (_el: _Element): void => { maximumNumberOfCounters = $._decode_implicit<MaximumNumberOfCounters>(() => _decode_MaximumNumberOfCounters)(_el); },
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FilteredCallTreatment,
        _extension_additions_list_spec_for_FilteredCallTreatment,
        _root_component_type_list_2_spec_for_FilteredCallTreatment,
        undefined,
    );
    return new FilteredCallTreatment(
        sFBillingChargingCharacteristics,
        informationToSend,
        maximumNumberOfCounters,
        releaseCause
    );
}; }
    return _cached_decoder_for_FilteredCallTreatment(el);
}

let _cached_encoder_for_FilteredCallTreatment: $.ASN1Encoder<FilteredCallTreatment> | null = null;

/**
 * @summary Encodes a(n) FilteredCallTreatment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilteredCallTreatment, encoded as an ASN.1 Element.
 */
export
function _encode_FilteredCallTreatment (value: FilteredCallTreatment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FilteredCallTreatment) { _cached_encoder_for_FilteredCallTreatment = function (value: FilteredCallTreatment, elGetter: $.ASN1Encoder<FilteredCallTreatment>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SFBillingChargingCharacteristics, $.BER)(value.sFBillingChargingCharacteristics, $.BER),
            /* IF_ABSENT  */ ((value.informationToSend === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_InformationToSend, $.BER)(value.informationToSend, $.BER)),
            /* IF_ABSENT  */ ((value.maximumNumberOfCounters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MaximumNumberOfCounters, $.BER)(value.maximumNumberOfCounters, $.BER)),
            /* IF_ABSENT  */ ((value.releaseCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Cause, $.BER)(value.releaseCause, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FilteredCallTreatment(value, elGetter);
}


/* eslint-enable */

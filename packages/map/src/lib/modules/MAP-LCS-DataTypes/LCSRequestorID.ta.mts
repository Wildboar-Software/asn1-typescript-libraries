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
import { USSD_DataCodingScheme, _decode_USSD_DataCodingScheme, _encode_USSD_DataCodingScheme } from "../MAP-SS-DataTypes/USSD-DataCodingScheme.ta.mjs";
// export { USSD_DataCodingScheme, _decode_USSD_DataCodingScheme, _encode_USSD_DataCodingScheme } from "../MAP-SS-DataTypes/USSD-DataCodingScheme.ta.mjs";
import { RequestorIDString, _decode_RequestorIDString, _encode_RequestorIDString } from "../MAP-LCS-DataTypes/RequestorIDString.ta.mjs";
// export { RequestorIDString, _decode_RequestorIDString, _encode_RequestorIDString } from "../MAP-LCS-DataTypes/RequestorIDString.ta.mjs";
import { LCS_FormatIndicator, _enum_for_LCS_FormatIndicator, LCS_FormatIndicator_logicalName /* IMPORTED_LONG_ENUMERATION_ITEM */, logicalName /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_FormatIndicator_e_mailAddress /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mailAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_FormatIndicator_msisdn /* IMPORTED_LONG_ENUMERATION_ITEM */, msisdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_FormatIndicator_url /* IMPORTED_LONG_ENUMERATION_ITEM */, url /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_FormatIndicator_sipUrl /* IMPORTED_LONG_ENUMERATION_ITEM */, sipUrl /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LCS_FormatIndicator, _encode_LCS_FormatIndicator } from "../MAP-LCS-DataTypes/LCS-FormatIndicator.ta.mjs";
// export { LCS_FormatIndicator, _enum_for_LCS_FormatIndicator, LCS_FormatIndicator_logicalName /* IMPORTED_LONG_ENUMERATION_ITEM */, logicalName /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_FormatIndicator_e_mailAddress /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mailAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_FormatIndicator_msisdn /* IMPORTED_LONG_ENUMERATION_ITEM */, msisdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_FormatIndicator_url /* IMPORTED_LONG_ENUMERATION_ITEM */, url /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_FormatIndicator_sipUrl /* IMPORTED_LONG_ENUMERATION_ITEM */, sipUrl /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LCS_FormatIndicator, _encode_LCS_FormatIndicator } from "../MAP-LCS-DataTypes/LCS-FormatIndicator.ta.mjs";


/**
 * @summary LCSRequestorID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSRequestorID ::= SEQUENCE {
 *     dataCodingScheme    [0] USSD-DataCodingScheme,
 *     requestorIDString    [1] RequestorIDString,
 *     ...,
 *     lcs-FormatIndicator    [2] LCS-FormatIndicator    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LCSRequestorID {
    constructor (
        /**
         * @summary `dataCodingScheme`.
         * @public
         * @readonly
         */
        readonly dataCodingScheme: USSD_DataCodingScheme,
        /**
         * @summary `requestorIDString`.
         * @public
         * @readonly
         */
        readonly requestorIDString: RequestorIDString,
        /**
         * @summary `lcs_FormatIndicator`.
         * @public
         * @readonly
         */
        readonly lcs_FormatIndicator: OPTIONAL<LCS_FormatIndicator>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LCSRequestorID
     * @description
     * 
     * This takes an `object` and converts it to a `LCSRequestorID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCSRequestorID`.
     * @returns {LCSRequestorID}
     */
    public static _from_object (_o: { [_K in keyof (LCSRequestorID)]: (LCSRequestorID)[_K] }): LCSRequestorID {
        return new LCSRequestorID(_o.dataCodingScheme, _o.requestorIDString, _o.lcs_FormatIndicator, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `lcs_FormatIndicator`
         * @public
         * @static
         */

    public static _enum_for_lcs_FormatIndicator = _enum_for_LCS_FormatIndicator;
}

/**
 * @summary The Leading Root Component Types of LCSRequestorID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCSRequestorID: $.ComponentSpec[] = [
    new $.ComponentSpec("dataCodingScheme", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("requestorIDString", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LCSRequestorID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCSRequestorID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCSRequestorID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCSRequestorID: $.ComponentSpec[] = [
    new $.ComponentSpec("lcs-FormatIndicator", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

let _cached_decoder_for_LCSRequestorID: $.ASN1Decoder<LCSRequestorID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSRequestorID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSRequestorID (el: _Element): LCSRequestorID {
    if (!_cached_decoder_for_LCSRequestorID) { _cached_decoder_for_LCSRequestorID = function (el: _Element): LCSRequestorID {
    let dataCodingScheme!: USSD_DataCodingScheme;
    let requestorIDString!: RequestorIDString;
    let lcs_FormatIndicator: OPTIONAL<LCS_FormatIndicator>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dataCodingScheme": (_el: _Element): void => { dataCodingScheme = $._decode_implicit<USSD_DataCodingScheme>(() => _decode_USSD_DataCodingScheme)(_el); },
        "requestorIDString": (_el: _Element): void => { requestorIDString = $._decode_implicit<RequestorIDString>(() => _decode_RequestorIDString)(_el); },
        "lcs-FormatIndicator": (_el: _Element): void => { lcs_FormatIndicator = $._decode_implicit<LCS_FormatIndicator>(() => _decode_LCS_FormatIndicator)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LCSRequestorID,
        _extension_additions_list_spec_for_LCSRequestorID,
        _root_component_type_list_2_spec_for_LCSRequestorID,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LCSRequestorID(
        dataCodingScheme,
        requestorIDString,
        lcs_FormatIndicator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LCSRequestorID(el);
}

let _cached_encoder_for_LCSRequestorID: $.ASN1Encoder<LCSRequestorID> | null = null;

/**
 * @summary Encodes a(n) LCSRequestorID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSRequestorID, encoded as an ASN.1 Element.
 */
export
function _encode_LCSRequestorID (value: LCSRequestorID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSRequestorID) { _cached_encoder_for_LCSRequestorID = function (value: LCSRequestorID, elGetter: $.ASN1Encoder<LCSRequestorID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_USSD_DataCodingScheme, $.BER)(value.dataCodingScheme, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RequestorIDString, $.BER)(value.requestorIDString, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.lcs_FormatIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LCS_FormatIndicator, $.BER)(value.lcs_FormatIndicator, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LCSRequestorID(value, elGetter);
}


/* eslint-enable */

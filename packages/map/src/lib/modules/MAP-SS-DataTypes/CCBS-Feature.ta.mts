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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CCBS_Index, _decode_CCBS_Index, _encode_CCBS_Index } from "../MAP-SS-DataTypes/CCBS-Index.ta.mjs";
// export { CCBS_Index, _decode_CCBS_Index, _encode_CCBS_Index } from "../MAP-SS-DataTypes/CCBS-Index.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ISDN_SubaddressString, _decode_ISDN_SubaddressString, _encode_ISDN_SubaddressString } from "../MAP-CommonDataTypes/ISDN-SubaddressString.ta.mjs";
// export { ISDN_SubaddressString, _decode_ISDN_SubaddressString, _encode_ISDN_SubaddressString } from "../MAP-CommonDataTypes/ISDN-SubaddressString.ta.mjs";
import { BasicServiceCode, _decode_BasicServiceCode, _encode_BasicServiceCode } from "../MAP-CommonDataTypes/BasicServiceCode.ta.mjs";
// export { BasicServiceCode, _decode_BasicServiceCode, _encode_BasicServiceCode } from "../MAP-CommonDataTypes/BasicServiceCode.ta.mjs";


/**
 * @summary CCBS_Feature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCBS-Feature ::= SEQUENCE {
 *     ccbs-Index    [0] CCBS-Index    OPTIONAL,
 *     b-subscriberNumber    [1] ISDN-AddressString    OPTIONAL,
 *     b-subscriberSubaddress    [2] ISDN-SubaddressString    OPTIONAL,
 *     basicServiceGroup    [3] BasicServiceCode    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CCBS_Feature {
    constructor (
        /**
         * @summary `ccbs_Index`.
         * @public
         * @readonly
         */
        readonly ccbs_Index: OPTIONAL<CCBS_Index>,
        /**
         * @summary `b_subscriberNumber`.
         * @public
         * @readonly
         */
        readonly b_subscriberNumber: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `b_subscriberSubaddress`.
         * @public
         * @readonly
         */
        readonly b_subscriberSubaddress: OPTIONAL<ISDN_SubaddressString>,
        /**
         * @summary `basicServiceGroup`.
         * @public
         * @readonly
         */
        readonly basicServiceGroup: OPTIONAL<BasicServiceCode>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CCBS_Feature
     * @description
     * 
     * This takes an `object` and converts it to a `CCBS_Feature`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCBS_Feature`.
     * @returns {CCBS_Feature}
     */
    public static _from_object (_o: { [_K in keyof (CCBS_Feature)]: (CCBS_Feature)[_K] }): CCBS_Feature {
        return new CCBS_Feature(_o.ccbs_Index, _o.b_subscriberNumber, _o.b_subscriberSubaddress, _o.basicServiceGroup, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CCBS_Feature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCBS_Feature: $.ComponentSpec[] = [
    new $.ComponentSpec("ccbs-Index", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("b-subscriberNumber", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("b-subscriberSubaddress", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("basicServiceGroup", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CCBS_Feature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCBS_Feature: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCBS_Feature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCBS_Feature: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CCBS_Feature: $.ASN1Decoder<CCBS_Feature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCBS_Feature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCBS_Feature (el: _Element): CCBS_Feature {
    if (!_cached_decoder_for_CCBS_Feature) { _cached_decoder_for_CCBS_Feature = function (el: _Element): CCBS_Feature {
    let ccbs_Index: OPTIONAL<CCBS_Index>;
    let b_subscriberNumber: OPTIONAL<ISDN_AddressString>;
    let b_subscriberSubaddress: OPTIONAL<ISDN_SubaddressString>;
    let basicServiceGroup: OPTIONAL<BasicServiceCode>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ccbs-Index": (_el: _Element): void => { ccbs_Index = $._decode_implicit<CCBS_Index>(() => _decode_CCBS_Index)(_el); },
        "b-subscriberNumber": (_el: _Element): void => { b_subscriberNumber = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "b-subscriberSubaddress": (_el: _Element): void => { b_subscriberSubaddress = $._decode_implicit<ISDN_SubaddressString>(() => _decode_ISDN_SubaddressString)(_el); },
        "basicServiceGroup": (_el: _Element): void => { basicServiceGroup = $._decode_explicit<BasicServiceCode>(() => _decode_BasicServiceCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CCBS_Feature,
        _extension_additions_list_spec_for_CCBS_Feature,
        _root_component_type_list_2_spec_for_CCBS_Feature,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CCBS_Feature(
        ccbs_Index,
        b_subscriberNumber,
        b_subscriberSubaddress,
        basicServiceGroup,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CCBS_Feature(el);
}

let _cached_encoder_for_CCBS_Feature: $.ASN1Encoder<CCBS_Feature> | null = null;

/**
 * @summary Encodes a(n) CCBS_Feature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCBS_Feature, encoded as an ASN.1 Element.
 */
export
function _encode_CCBS_Feature (value: CCBS_Feature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCBS_Feature) { _cached_encoder_for_CCBS_Feature = function (value: CCBS_Feature, elGetter: $.ASN1Encoder<CCBS_Feature>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ccbs_Index === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CCBS_Index, $.BER)(value.ccbs_Index, $.BER)),
            /* IF_ABSENT  */ ((value.b_subscriberNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.b_subscriberNumber, $.BER)),
            /* IF_ABSENT  */ ((value.b_subscriberSubaddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_SubaddressString, $.BER)(value.b_subscriberSubaddress, $.BER)),
            /* IF_ABSENT  */ ((value.basicServiceGroup === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_BasicServiceCode, $.BER)(value.basicServiceGroup, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CCBS_Feature(value, elGetter);
}


/* eslint-enable */

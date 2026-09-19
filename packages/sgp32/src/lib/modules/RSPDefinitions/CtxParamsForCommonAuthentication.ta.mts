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
import { DeviceInfo, _decode_DeviceInfo, _encode_DeviceInfo } from "../RSPDefinitions/DeviceInfo.ta.mjs";
// export { DeviceInfo, _decode_DeviceInfo, _encode_DeviceInfo } from "../RSPDefinitions/DeviceInfo.ta.mjs";


/**
 * @summary CtxParamsForCommonAuthentication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CtxParamsForCommonAuthentication ::= SEQUENCE {
 *     matchingId UTF8String OPTIONAL, -- The MatchingId could be the Activation code token or EventID or empty
 *     deviceInfo DeviceInfo -- The Device information
 * }
 * ```
 * 
 * @class
 */
export
class CtxParamsForCommonAuthentication {
    constructor (
        /**
         * @summary `matchingId`.
         * @public
         * @readonly
         */
        readonly matchingId: OPTIONAL<UTF8String>,
        /**
         * @summary `deviceInfo`.
         * @public
         * @readonly
         */
        readonly deviceInfo: DeviceInfo
    ) {}

    /**
     * @summary Restructures an object into a CtxParamsForCommonAuthentication
     * @description
     * 
     * This takes an `object` and converts it to a `CtxParamsForCommonAuthentication`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CtxParamsForCommonAuthentication`.
     * @returns {CtxParamsForCommonAuthentication}
     */
    public static _from_object (_o: { [_K in keyof (CtxParamsForCommonAuthentication)]: (CtxParamsForCommonAuthentication)[_K] }): CtxParamsForCommonAuthentication {
        return new CtxParamsForCommonAuthentication(_o.matchingId, _o.deviceInfo);
    }


}

/**
 * @summary The Leading Root Component Types of CtxParamsForCommonAuthentication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CtxParamsForCommonAuthentication: $.ComponentSpec[] = [
    new $.ComponentSpec("matchingId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("deviceInfo", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CtxParamsForCommonAuthentication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CtxParamsForCommonAuthentication: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CtxParamsForCommonAuthentication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CtxParamsForCommonAuthentication: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CtxParamsForCommonAuthentication: $.ASN1Decoder<CtxParamsForCommonAuthentication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CtxParamsForCommonAuthentication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CtxParamsForCommonAuthentication (el: _Element): CtxParamsForCommonAuthentication {
    if (!_cached_decoder_for_CtxParamsForCommonAuthentication) { _cached_decoder_for_CtxParamsForCommonAuthentication = function (el: _Element): CtxParamsForCommonAuthentication {
    let matchingId: OPTIONAL<UTF8String>;
    let deviceInfo!: DeviceInfo;
    const callbacks: $.DecodingMap = {
        "matchingId": (_el: _Element): void => { matchingId = $._decodeUTF8String(_el); },
        "deviceInfo": (_el: _Element): void => { deviceInfo = _decode_DeviceInfo(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CtxParamsForCommonAuthentication,
        _extension_additions_list_spec_for_CtxParamsForCommonAuthentication,
        _root_component_type_list_2_spec_for_CtxParamsForCommonAuthentication,
        undefined,
    );
    return new CtxParamsForCommonAuthentication(
        matchingId,
        deviceInfo
    );
}; }
    return _cached_decoder_for_CtxParamsForCommonAuthentication(el);
}

let _cached_encoder_for_CtxParamsForCommonAuthentication: $.ASN1Encoder<CtxParamsForCommonAuthentication> | null = null;

/**
 * @summary Encodes a(n) CtxParamsForCommonAuthentication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CtxParamsForCommonAuthentication, encoded as an ASN.1 Element.
 */
export
function _encode_CtxParamsForCommonAuthentication (value: CtxParamsForCommonAuthentication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CtxParamsForCommonAuthentication) { _cached_encoder_for_CtxParamsForCommonAuthentication = function (value: CtxParamsForCommonAuthentication, elGetter: $.ASN1Encoder<CtxParamsForCommonAuthentication>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.matchingId === undefined) ? undefined : $._encodeUTF8String(value.matchingId, $.BER)),
            /* REQUIRED   */ _encode_DeviceInfo(value.deviceInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CtxParamsForCommonAuthentication(value, elGetter);
}


/* eslint-enable */

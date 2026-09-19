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
import { NegoData, _decode_NegoData, _encode_NegoData } from "../CredSSP/NegoData.ta.mjs";
// export { NegoData, _decode_NegoData, _encode_NegoData } from "../CredSSP/NegoData.ta.mjs";


/**
 * @summary TSRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSRequest ::= SEQUENCE {
 *     version           [0] INTEGER,
 *     negoTokens     [1] NegoData OPTIONAL,
 *     authInfo       [2] OCTET STRING OPTIONAL,
 *     pubKeyAuth     [3] OCTET STRING OPTIONAL,
 *     errorCode      [4] INTEGER OPTIONAL,
 *     clientNonce    [5] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TSRequest {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: INTEGER,
        /**
         * @summary `negoTokens`.
         * @public
         * @readonly
         */
        readonly negoTokens: OPTIONAL<NegoData>,
        /**
         * @summary `authInfo`.
         * @public
         * @readonly
         */
        readonly authInfo: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `pubKeyAuth`.
         * @public
         * @readonly
         */
        readonly pubKeyAuth: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `errorCode`.
         * @public
         * @readonly
         */
        readonly errorCode: OPTIONAL<INTEGER>,
        /**
         * @summary `clientNonce`.
         * @public
         * @readonly
         */
        readonly clientNonce: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a TSRequest
     * @description
     * 
     * This takes an `object` and converts it to a `TSRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSRequest`.
     * @returns {TSRequest}
     */
    public static _from_object (_o: { [_K in keyof (TSRequest)]: (TSRequest)[_K] }): TSRequest {
        return new TSRequest(_o.version, _o.negoTokens, _o.authInfo, _o.pubKeyAuth, _o.errorCode, _o.clientNonce);
    }


}

/**
 * @summary The Leading Root Component Types of TSRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("negoTokens", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("authInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pubKeyAuth", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("errorCode", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("clientNonce", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of TSRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSRequest: $.ASN1Decoder<TSRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSRequest (el: _Element): TSRequest {
    if (!_cached_decoder_for_TSRequest) { _cached_decoder_for_TSRequest = function (el: _Element): TSRequest {
    let version!: INTEGER;
    let negoTokens: OPTIONAL<NegoData>;
    let authInfo: OPTIONAL<OCTET_STRING>;
    let pubKeyAuth: OPTIONAL<OCTET_STRING>;
    let errorCode: OPTIONAL<INTEGER>;
    let clientNonce: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "negoTokens": (_el: _Element): void => { negoTokens = $._decode_explicit<NegoData>(() => _decode_NegoData)(_el); },
        "authInfo": (_el: _Element): void => { authInfo = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pubKeyAuth": (_el: _Element): void => { pubKeyAuth = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "errorCode": (_el: _Element): void => { errorCode = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "clientNonce": (_el: _Element): void => { clientNonce = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TSRequest,
        _extension_additions_list_spec_for_TSRequest,
        _root_component_type_list_2_spec_for_TSRequest,
        undefined,
    );
    return new TSRequest(
        version,
        negoTokens,
        authInfo,
        pubKeyAuth,
        errorCode,
        clientNonce
    );
}; }
    return _cached_decoder_for_TSRequest(el);
}

let _cached_encoder_for_TSRequest: $.ASN1Encoder<TSRequest> | null = null;

/**
 * @summary Encodes a(n) TSRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSRequest, encoded as an ASN.1 Element.
 */
export
function _encode_TSRequest (value: TSRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSRequest) { _cached_encoder_for_TSRequest = function (value: TSRequest, elGetter: $.ASN1Encoder<TSRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.version, $.BER),
            /* IF_ABSENT  */ ((value.negoTokens === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_NegoData, $.BER)(value.negoTokens, $.BER)),
            /* IF_ABSENT  */ ((value.authInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.authInfo, $.BER)),
            /* IF_ABSENT  */ ((value.pubKeyAuth === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.pubKeyAuth, $.BER)),
            /* IF_ABSENT  */ ((value.errorCode === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.errorCode, $.BER)),
            /* IF_ABSENT  */ ((value.clientNonce === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.clientNonce, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSRequest(value, elGetter);
}


/* eslint-enable */

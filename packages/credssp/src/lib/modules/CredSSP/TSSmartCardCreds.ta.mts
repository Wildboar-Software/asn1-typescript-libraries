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
import { TSCspDataDetail, _decode_TSCspDataDetail, _encode_TSCspDataDetail } from "../CredSSP/TSCspDataDetail.ta.mjs";
// export { TSCspDataDetail, _decode_TSCspDataDetail, _encode_TSCspDataDetail } from "../CredSSP/TSCspDataDetail.ta.mjs";


/**
 * @summary TSSmartCardCreds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSSmartCardCreds ::= SEQUENCE {
 *          pin        [0] OCTET STRING,
 *          cspData     [1] TSCspDataDetail,
 *          userHint     [2] OCTET STRING OPTIONAL,
 *          domainHint     [3] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TSSmartCardCreds {
    constructor (
        /**
         * @summary `pin`.
         * @public
         * @readonly
         */
        readonly pin: OCTET_STRING,
        /**
         * @summary `cspData`.
         * @public
         * @readonly
         */
        readonly cspData: TSCspDataDetail,
        /**
         * @summary `userHint`.
         * @public
         * @readonly
         */
        readonly userHint: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `domainHint`.
         * @public
         * @readonly
         */
        readonly domainHint: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a TSSmartCardCreds
     * @description
     * 
     * This takes an `object` and converts it to a `TSSmartCardCreds`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSSmartCardCreds`.
     * @returns {TSSmartCardCreds}
     */
    public static _from_object (_o: { [_K in keyof (TSSmartCardCreds)]: (TSSmartCardCreds)[_K] }): TSSmartCardCreds {
        return new TSSmartCardCreds(_o.pin, _o.cspData, _o.userHint, _o.domainHint);
    }


}

/**
 * @summary The Leading Root Component Types of TSSmartCardCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSSmartCardCreds: $.ComponentSpec[] = [
    new $.ComponentSpec("pin", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cspData", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("userHint", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("domainHint", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TSSmartCardCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSSmartCardCreds: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSSmartCardCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSSmartCardCreds: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSSmartCardCreds: $.ASN1Decoder<TSSmartCardCreds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSSmartCardCreds
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSSmartCardCreds (el: _Element): TSSmartCardCreds {
    if (!_cached_decoder_for_TSSmartCardCreds) { _cached_decoder_for_TSSmartCardCreds = function (el: _Element): TSSmartCardCreds {
    let pin!: OCTET_STRING;
    let cspData!: TSCspDataDetail;
    let userHint: OPTIONAL<OCTET_STRING>;
    let domainHint: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "pin": (_el: _Element): void => { pin = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cspData": (_el: _Element): void => { cspData = $._decode_explicit<TSCspDataDetail>(() => _decode_TSCspDataDetail)(_el); },
        "userHint": (_el: _Element): void => { userHint = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "domainHint": (_el: _Element): void => { domainHint = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TSSmartCardCreds,
        _extension_additions_list_spec_for_TSSmartCardCreds,
        _root_component_type_list_2_spec_for_TSSmartCardCreds,
        undefined,
    );
    return new TSSmartCardCreds(
        pin,
        cspData,
        userHint,
        domainHint
    );
}; }
    return _cached_decoder_for_TSSmartCardCreds(el);
}

let _cached_encoder_for_TSSmartCardCreds: $.ASN1Encoder<TSSmartCardCreds> | null = null;

/**
 * @summary Encodes a(n) TSSmartCardCreds into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSSmartCardCreds, encoded as an ASN.1 Element.
 */
export
function _encode_TSSmartCardCreds (value: TSSmartCardCreds, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSSmartCardCreds) { _cached_encoder_for_TSSmartCardCreds = function (value: TSSmartCardCreds, elGetter: $.ASN1Encoder<TSSmartCardCreds>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.pin, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_TSCspDataDetail, $.BER)(value.cspData, $.BER),
            /* IF_ABSENT  */ ((value.userHint === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.userHint, $.BER)),
            /* IF_ABSENT  */ ((value.domainHint === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.domainHint, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSSmartCardCreds(value, elGetter);
}


/* eslint-enable */

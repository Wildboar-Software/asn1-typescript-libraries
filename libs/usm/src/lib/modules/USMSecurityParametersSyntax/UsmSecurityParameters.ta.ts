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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION UsmSecurityParameters */
/**
 * @summary UsmSecurityParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UsmSecurityParameters ::= SEQUENCE {
 *     -- global User-based security parameters
 *     msgAuthoritativeEngineID     OCTET STRING,
 *     msgAuthoritativeEngineBoots  INTEGER (0..2147483647),
 *     msgAuthoritativeEngineTime   INTEGER (0..2147483647),
 *     msgUserName                  OCTET STRING (SIZE(0..32)),
 *     -- authentication protocol specific parameters
 *     msgAuthenticationParameters  OCTET STRING,
 *     -- privacy protocol specific parameters
 *     msgPrivacyParameters         OCTET STRING }
 * ```
 * 
 * @class
 */
export
class UsmSecurityParameters {
    constructor (
        /**
         * @summary `msgAuthoritativeEngineID`.
         * @public
         * @readonly
         */
        readonly msgAuthoritativeEngineID: OCTET_STRING,
        /**
         * @summary `msgAuthoritativeEngineBoots`.
         * @public
         * @readonly
         */
        readonly msgAuthoritativeEngineBoots: INTEGER,
        /**
         * @summary `msgAuthoritativeEngineTime`.
         * @public
         * @readonly
         */
        readonly msgAuthoritativeEngineTime: INTEGER,
        /**
         * @summary `msgUserName`.
         * @public
         * @readonly
         */
        readonly msgUserName: OCTET_STRING,
        /**
         * @summary `msgAuthenticationParameters`.
         * @public
         * @readonly
         */
        readonly msgAuthenticationParameters: OCTET_STRING,
        /**
         * @summary `msgPrivacyParameters`.
         * @public
         * @readonly
         */
        readonly msgPrivacyParameters: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a UsmSecurityParameters
     * @description
     * 
     * This takes an `object` and converts it to a `UsmSecurityParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UsmSecurityParameters`.
     * @returns {UsmSecurityParameters}
     */
    public static _from_object (_o: { [_K in keyof (UsmSecurityParameters)]: (UsmSecurityParameters)[_K] }): UsmSecurityParameters {
        return new UsmSecurityParameters(_o.msgAuthoritativeEngineID, _o.msgAuthoritativeEngineBoots, _o.msgAuthoritativeEngineTime, _o.msgUserName, _o.msgAuthenticationParameters, _o.msgPrivacyParameters);
    }


}
/* END_OF_SYMBOL_DEFINITION UsmSecurityParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UsmSecurityParameters */
/**
 * @summary The Leading Root Component Types of UsmSecurityParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UsmSecurityParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("msgAuthoritativeEngineID", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("msgAuthoritativeEngineBoots", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("msgAuthoritativeEngineTime", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("msgUserName", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("msgAuthenticationParameters", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("msgPrivacyParameters", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UsmSecurityParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UsmSecurityParameters */
/**
 * @summary The Trailing Root Component Types of UsmSecurityParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UsmSecurityParameters: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UsmSecurityParameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UsmSecurityParameters */
/**
 * @summary The Extension Addition Component Types of UsmSecurityParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UsmSecurityParameters: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UsmSecurityParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UsmSecurityParameters */
let _cached_decoder_for_UsmSecurityParameters: $.ASN1Decoder<UsmSecurityParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UsmSecurityParameters */

/* START_OF_SYMBOL_DEFINITION _decode_UsmSecurityParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) UsmSecurityParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UsmSecurityParameters} The decoded data structure.
 */
export
function _decode_UsmSecurityParameters (el: _Element) {
    if (!_cached_decoder_for_UsmSecurityParameters) { _cached_decoder_for_UsmSecurityParameters = function (el: _Element): UsmSecurityParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("UsmSecurityParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "msgAuthoritativeEngineID";
    sequence[1].name = "msgAuthoritativeEngineBoots";
    sequence[2].name = "msgAuthoritativeEngineTime";
    sequence[3].name = "msgUserName";
    sequence[4].name = "msgAuthenticationParameters";
    sequence[5].name = "msgPrivacyParameters";
    let msgAuthoritativeEngineID!: OCTET_STRING;
    let msgAuthoritativeEngineBoots!: INTEGER;
    let msgAuthoritativeEngineTime!: INTEGER;
    let msgUserName!: OCTET_STRING;
    let msgAuthenticationParameters!: OCTET_STRING;
    let msgPrivacyParameters!: OCTET_STRING;
    msgAuthoritativeEngineID = $._decodeOctetString(sequence[0]);
    msgAuthoritativeEngineBoots = $._decodeInteger(sequence[1]);
    msgAuthoritativeEngineTime = $._decodeInteger(sequence[2]);
    msgUserName = $._decodeOctetString(sequence[3]);
    msgAuthenticationParameters = $._decodeOctetString(sequence[4]);
    msgPrivacyParameters = $._decodeOctetString(sequence[5]);
    return new UsmSecurityParameters(
        msgAuthoritativeEngineID,
        msgAuthoritativeEngineBoots,
        msgAuthoritativeEngineTime,
        msgUserName,
        msgAuthenticationParameters,
        msgPrivacyParameters,

    );
}; }
    return _cached_decoder_for_UsmSecurityParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UsmSecurityParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UsmSecurityParameters */
let _cached_encoder_for_UsmSecurityParameters: $.ASN1Encoder<UsmSecurityParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UsmSecurityParameters */

/* START_OF_SYMBOL_DEFINITION _encode_UsmSecurityParameters */
/**
 * @summary Encodes a(n) UsmSecurityParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UsmSecurityParameters, encoded as an ASN.1 Element.
 */
export
function _encode_UsmSecurityParameters (value: UsmSecurityParameters, elGetter: $.ASN1Encoder<UsmSecurityParameters>) {
    if (!_cached_encoder_for_UsmSecurityParameters) { _cached_encoder_for_UsmSecurityParameters = function (value: UsmSecurityParameters, elGetter: $.ASN1Encoder<UsmSecurityParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.msgAuthoritativeEngineID, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.msgAuthoritativeEngineBoots, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.msgAuthoritativeEngineTime, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.msgUserName, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.msgAuthenticationParameters, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.msgPrivacyParameters, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UsmSecurityParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UsmSecurityParameters */

/* eslint-enable */

/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
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
    new $.ComponentSpec("msgAuthoritativeEngineID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("msgAuthoritativeEngineBoots", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("msgAuthoritativeEngineTime", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("msgUserName", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("msgAuthenticationParameters", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("msgPrivacyParameters", false, $.hasTag(_TagClass.universal, 4))
];


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


let _cached_decoder_for_UsmSecurityParameters: $.ASN1Decoder<UsmSecurityParameters> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UsmSecurityParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UsmSecurityParameters} The decoded data structure.
 */
export
function _decode_UsmSecurityParameters (el: _Element): UsmSecurityParameters {
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


let _cached_encoder_for_UsmSecurityParameters: $.ASN1Encoder<UsmSecurityParameters> | null = null;


/**
 * @summary Encodes a(n) UsmSecurityParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UsmSecurityParameters, encoded as an ASN.1 Element.
 */
export
function _encode_UsmSecurityParameters (value: UsmSecurityParameters, elGetter: $.ASN1Encoder<UsmSecurityParameters>): _Element {
    if (!_cached_encoder_for_UsmSecurityParameters) { _cached_encoder_for_UsmSecurityParameters = function (value: UsmSecurityParameters): _Element {
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


/* eslint-enable */

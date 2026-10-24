/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1Error,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { id_icao_mrtd_security_aaProtocolObject } from "../Doc-9303-Part-11-Module/id-icao-mrtd-security-aaProtocolObject.va.mjs";



/**
 * @summary ActiveAuthenticationInfo
 * @description
 *
 * Required in the EF.DG14 `SecurityInfos` when Active Authentication uses
 * ECDSA. Active Authentication signs an inspection-system nonce with a
 * private key that stays in the chip. EF.DG15 holds the public key, and the
 * security object authenticates that data group.
 *
 * `version` must be 1. `signatureAlgorithm` uses an object identifier from
 * BSI TR-03111. For ECDSA the plain signature format of TR-03111 is used,
 * with SHA-224, SHA-256, SHA-384, or SHA-512, on prime curves with
 * uncompressed points. SHA-1 and RIPEMD-160 are not used.
 *
 * The requirement is stated for ECDSA. RSA Active Authentication is
 * specified separately in section 6.1.2.2 (ISO/IEC 9796-2 scheme 1) and has
 * no object identifier in this module.
 *
 * Doc 9303-11, sections 6.1 and 9.2.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActiveAuthenticationInfo ::= SEQUENCE {
 *     protocol            OBJECT IDENTIFIER(id-icao-mrtd-security-aaProtocolObject),
 *     version             INTEGER, -- MUST be 1
 *     signatureAlgorithm  OBJECT IDENTIFIER
 * }
 * ```
 * 
 * @class
 */
export
class ActiveAuthenticationInfo {
    /**
     * `id-icao-mrtd-security-aaProtocolObject`.
     * @summary `protocol`.
     * @public
     * @readonly
     */
    public readonly protocol: OBJECT_IDENTIFIER;
    /**
     * Protocol version. This specification supports only version 1.
     * @summary `version`.
     * @public
     * @readonly
     */
    public readonly version: INTEGER;
    /**
     * ECDSA object identifier from BSI TR-03111.
     * @summary `signatureAlgorithm`.
     * @public
     * @readonly
     */
    public readonly signatureAlgorithm: OBJECT_IDENTIFIER;

    constructor (
        protocol: OBJECT_IDENTIFIER,
        version: INTEGER,
        signatureAlgorithm: OBJECT_IDENTIFIER
    ) {
        this.protocol = protocol;
        this.version = version;
        this.signatureAlgorithm = signatureAlgorithm;
        if (!id_icao_mrtd_security_aaProtocolObject.isEqualTo(protocol)) {
            throw new ASN1Error("ActiveAuthenticationInfo.protocol violates permitted OBJECT IDENTIFIER constraint");
        }
    }

    /**
     * @summary Restructures an object into a ActiveAuthenticationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ActiveAuthenticationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActiveAuthenticationInfo`.
     * @returns {ActiveAuthenticationInfo}
     */
    public static _from_object (_o: { [_K in keyof (ActiveAuthenticationInfo)]: (ActiveAuthenticationInfo)[_K] }): ActiveAuthenticationInfo {
        return new ActiveAuthenticationInfo(_o.protocol, _o.version, _o.signatureAlgorithm);
    }


}

/**
 * @summary The Leading Root Component Types of ActiveAuthenticationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ActiveAuthenticationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("protocol", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("signatureAlgorithm", false, $.hasTag(_TagClass.universal, 6))
];

/**
 * @summary The Trailing Root Component Types of ActiveAuthenticationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ActiveAuthenticationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ActiveAuthenticationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ActiveAuthenticationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ActiveAuthenticationInfo: $.ASN1Decoder<ActiveAuthenticationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActiveAuthenticationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActiveAuthenticationInfo (el: _Element): ActiveAuthenticationInfo {
    if (!_cached_decoder_for_ActiveAuthenticationInfo) { _cached_decoder_for_ActiveAuthenticationInfo = function (el: _Element): ActiveAuthenticationInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ActiveAuthenticationInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "protocol";
    sequence[1].name = "version";
    sequence[2].name = "signatureAlgorithm";
    const protocol: OBJECT_IDENTIFIER = $._decodeObjectIdentifier(sequence[0]);
    const version: INTEGER = $._decodeInteger(sequence[1]);
    const signatureAlgorithm: OBJECT_IDENTIFIER = $._decodeObjectIdentifier(sequence[2]);
    return new ActiveAuthenticationInfo(
        protocol,
        version,
        signatureAlgorithm,

    );
}; }
    return _cached_decoder_for_ActiveAuthenticationInfo(el);
}

let _cached_encoder_for_ActiveAuthenticationInfo: $.ASN1Encoder<ActiveAuthenticationInfo> | null = null;

/**
 * @summary Encodes a(n) ActiveAuthenticationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActiveAuthenticationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ActiveAuthenticationInfo (value: ActiveAuthenticationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActiveAuthenticationInfo) { _cached_encoder_for_ActiveAuthenticationInfo = function (value: ActiveAuthenticationInfo, elGetter: $.ASN1Encoder<ActiveAuthenticationInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.protocol, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.version, $.BER),
            /* REQUIRED   */ $._encodeObjectIdentifier(value.signatureAlgorithm, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ActiveAuthenticationInfo(value, elGetter);
}


/* eslint-enable */

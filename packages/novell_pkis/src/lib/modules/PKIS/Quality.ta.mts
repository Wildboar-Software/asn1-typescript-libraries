/* eslint-disable */
import {
    ASN1SizeError,
    BOOLEAN,
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange } from "../../assertIntegerRange.mjs";
import { CompusecQuality, _decode_CompusecQuality, _encode_CompusecQuality } from "../PKIS/CompusecQuality.ta.mjs";
import { CryptoQuality, _decode_CryptoQuality, _encode_CryptoQuality } from "../PKIS/CryptoQuality.ta.mjs";


/**
 * @summary Quality
 * @description
 *
 * Shared structure of `KeyQuality` and `CryptoProcessQuality`. Six
 * values are stored here. Two more, algorithm type and key length, are
 * taken from elsewhere in the certificate and included in the greatest
 * lower bound and, when `enforceQuality` is TRUE, in enforcement.
 * They are omitted here to save space. §4.
 *
 * Display names: "Enforce Quality", "Computer Security Quality",
 * "Crypto Module Quality", and "Key Storage Quality". The first PKIS
 * release shows the numeric values only. §4.4, §4.5.
 *
 * When enforcement compares a public key with a wrapping symmetric
 * key, and for that purpose only: a 56- to 64-bit secret key is about
 * a 512-bit RSA or DSS key; two-key (112-bit) triple-DES is slightly
 * stronger than 1024-bit RSA; three-key (168-bit) triple-DES is
 * slightly stronger than 2048-bit RSA; DSS matches RSA of the same
 * length. Other algorithms are not assigned an equivalence. §4.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Quality ::= SEQUENCE {
 *  enforceQuality BOOLEAN,
 *   -- If TRUE, the explicit attributes compusecQuality,
 *   -- cryptoQuality, and keyStorageQuality, plus the
 *   -- implicit attributes algorithmType and keyLength
 *   -- are either enforced at all times, or a dynamic low
 *   -- water mark (Greatest Lower Bound)may be maintained.
 *   -- I.e., if enforceQuality is TRUE for the
 *   -- keyQuality attribute, the key must never be
 *   -- allowed to be transported to and/or used on any
 *   -- platform that does not meet the minimum
 *   -- criteria, and hence enforceQuality must be TRUE for
 *   -- the cryptoProcessQuality as well
 *   -- If enforceQuality is FALSE for keyQuality, but
 *   -- TRUE for cryptoProcessQuality, then the
 *   -- operating system has not enforced the criteria
 *   -- in any technical sense, but the subscriber
 *   -- is nonetheless representing that the minimum
 *   -- criteria will be maintained,
 *   -- e.g., by manual or procedural controls.
 *   -- For PKIS and NICI versions 1.0, enforceQuality
 *   -- must be set to FALSE in the keyQuality attribute.
 *  compusecQuality     CompusecQuality,
 *  cryptoQuality       CryptoQuality,
 *  keyStorageQuality   INTEGER (0..255) -- See definitions in Appendix C
 * }
 * ```
 * 
 * @class
 */
export
class Quality {
    constructor (
        /**
         * @summary `enforceQuality`.
         * @description
         *
         * Whether the platform enforces `compusecQuality`,
         * `cryptoQuality`, `keyStorageQuality`, and the implicit
         * algorithm type and key length, or at least keeps a dynamic
         * low-water mark. TRUE on `KeyQuality` means the private key
         * is never transported to or used on a platform below those
         * minima, and `CryptoProcessQuality.enforceQuality` is then
         * also TRUE. FALSE on key quality and TRUE on process quality
         * means the subscriber is promising procedural controls rather
         * than a technical refusal. PKIS and NICI 1.0 set this FALSE
         * on key quality. §4.4.
         *
         * @public
         * @readonly
         */
        readonly enforceQuality: BOOLEAN,
        /**
         * @summary `compusecQuality`.
         * @description
         *
         * Trustworthiness of the computer platform. If this rating is
         * inadequate for the purpose, the rest of the certificate
         * attributes are not a basis for trust. Display name:
         * "Computer Security Quality". §4.1.
         *
         * @public
         * @readonly
         */
        readonly compusecQuality: CompusecQuality,
        /**
         * @summary `cryptoQuality`.
         * @description
         *
         * Security of the cryptographic module, hardware or software.
         * A strong platform can still host a weak module; the computer-
         * security criteria do not cover cryptographic implementation.
         * Display name: "Crypto Module Quality". §4.2.
         *
         * @public
         * @readonly
         */
        readonly cryptoQuality: CryptoQuality,
        /**
         * @summary `keyStorageQuality`.
         * @description
         *
         * How the private key, or the symmetric secret key, is stored.
         * Public-key storage, including a root CA key, is outside this
         * scale. There was no published standard; the values are
         * Novell's proposal. Appendix C. The ASN.1 comment points here.
         *
         * | Value | Meaning |
         * | ---: | --- |
         * | 0 | Unknown. |
         * | 1 | Cleartext on non-removable media. |
         * | 2 | Cleartext on removable media. |
         * | 3 | Cleartext in an authorized distribution channel. |
         * | 5 | Removable, obfuscated (more than a constant XOR). |
         * | 7 | Password-encrypted, outside an evaluated TCB. |
         * | 8 | As 7, on removable media. |
         * | 10 | Cleartext, physically protected (safe, locked cabinet, or locked room); transit by strong encryption or registered mail. |
         * | 12 | As 10, plus a user password outside an evaluated TCB. |
         * | 15 | Cleartext in Secret-equivalent storage (DoD Industrial Security Manual). No control of hostile programs while the key is installed. |
         * | 17 | As 15, plus a user password outside an evaluated TCB. |
         * | 20 | Cleartext in Top-Secret-equivalent storage, alarmed. No control of hostile programs while installed. |
         * | 22 | As 20, plus a user password outside an evaluated TCB. |
         * | 30 | Password-encrypted by a TCB that meets the crypto process quality. Physical protection unspecified. |
         * | 40 | As 30, with physical protection as 10. |
         * | 45 | As 40, with physical security as 15. |
         * | 50 | As 40, with physical security as 20. |
         * | 100 | Discretionary access control, C2 or higher, per the crypto process quality. |
         * | 105 | As 100, plus software encryption whose master keys are obfuscated. |
         * | 110 | As 105, with physical security as 10. |
         * | 115 | As 105, with physical security as 15. |
         * | 117 | C2 or higher; wrapped in an authenticated public key and the clear key zeroized. |
         * | 120 | Mandatory access control, B1 or higher, physical security as 10. |
         * | 121 | Mandatory access control, named "physically secured"; the text also cites physical security as 10. |
         * | 122 | B1 or higher, plus K-of-N secret sharing (K at least 2), physical security as 10. |
         * | 125 | As 122, physical security as 15. |
         * | 127 | B1 or higher; wrapped in an authenticated public key and the clear key zeroized. |
         * | 130 | High-assurance MAC, B3 or higher, physical security as 10. |
         * | 132 | As 130, physical security as 15. |
         * | 135 | B3 or higher, K-of-N secret sharing, physical security as 10. |
         * | 137 | As 135, physical security as 15. |
         * | 139 | B3 or higher; wrapped in an authenticated public key and the clear key zeroized. |
         * | 150 | Hardware, FIPS 140-1 level 3 or higher, security-officer access control. |
         * | 175 | Hardware, level 3 or higher, K-of-N enabling (K at least 2). |
         * | 200 | Hardware, level 3 or higher, PIN or password plus a biometric. |
         * | 205 | As 200, with K-of-N controls. |
         * | 230 | Quorum cryptography: shares are not recombined by a trusted function. Implemented on level 3 or higher. |
         * | 240 | As 230, with biometric control of each share. |
         *
         * Other values are reserved or to be determined. In the Novell
         * chain example (§4.5), the Licensed CA's key-quality storage
         * is 132 and its process-quality storage is 5, because the
         * private key is generated on the B3 platform and then shipped
         * obfuscated on the license diskette.
         *
         * @public
         * @readonly
         */
        readonly keyStorageQuality: INTEGER
    ) {
        if (compusecQuality.length !== 1) {
            throw new ASN1SizeError("Quality.compusecQuality violates SIZE constraint");
        }
        if (cryptoQuality.length !== 1) {
            throw new ASN1SizeError("Quality.cryptoQuality violates SIZE constraint");
        }
        assertIntegerRange(keyStorageQuality, 0n, 255n, "Quality.keyStorageQuality");
    }

    /**
     * @summary Restructures an object into a Quality
     * @description
     * 
     * This takes an `object` and converts it to a `Quality`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Quality`.
     * @returns {Quality}
     */
    public static _from_object (_o: { [_K in keyof (Quality)]: (Quality)[_K] }): Quality {
        return new Quality(_o.enforceQuality, _o.compusecQuality, _o.cryptoQuality, _o.keyStorageQuality);
    }


}

/**
 * @summary The Leading Root Component Types of Quality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Quality: $.ComponentSpec[] = [
    new $.ComponentSpec("enforceQuality", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("compusecQuality", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("cryptoQuality", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("keyStorageQuality", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of Quality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Quality: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Quality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Quality: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Quality: $.ASN1Decoder<Quality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Quality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Quality (el: _Element): Quality {
    if (!_cached_decoder_for_Quality) { _cached_decoder_for_Quality = function (el: _Element): Quality {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("Quality contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "enforceQuality";
    sequence[1].name = "compusecQuality";
    sequence[2].name = "cryptoQuality";
    sequence[3].name = "keyStorageQuality";
    let enforceQuality!: BOOLEAN;
    let compusecQuality!: CompusecQuality;
    let cryptoQuality!: CryptoQuality;
    let keyStorageQuality!: INTEGER;
    enforceQuality = $._decodeBoolean(sequence[0]);
    compusecQuality = _decode_CompusecQuality(sequence[1]);
    cryptoQuality = _decode_CryptoQuality(sequence[2]);
    keyStorageQuality = $._decodeInteger(sequence[3]);
    return new Quality(
        enforceQuality,
        compusecQuality,
        cryptoQuality,
        keyStorageQuality,

    );
}; }
    return _cached_decoder_for_Quality(el);
}

let _cached_encoder_for_Quality: $.ASN1Encoder<Quality> | null = null;

/**
 * @summary Encodes a(n) Quality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Quality, encoded as an ASN.1 Element.
 */
export
function _encode_Quality (value: Quality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Quality) { _cached_encoder_for_Quality = function (value: Quality): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.enforceQuality, $.BER),
            /* REQUIRED   */ _encode_CompusecQuality(value.compusecQuality, $.BER),
            /* REQUIRED   */ _encode_CryptoQuality(value.cryptoQuality, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.keyStorageQuality, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Quality(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CompusecQuality, _decode_CompusecQuality, _encode_CompusecQuality } from "../PKIS/CompusecQuality.ta.mjs";
// export { CompusecQuality, _decode_CompusecQuality, _encode_CompusecQuality } from "../PKIS/CompusecQuality.ta.mjs";
import { CryptoQuality, _decode_CryptoQuality, _encode_CryptoQuality } from "../PKIS/CryptoQuality.ta.mjs";
// export { CryptoQuality, _decode_CryptoQuality, _encode_CryptoQuality } from "../PKIS/CryptoQuality.ta.mjs";


/**
 * @summary Quality
 * @description
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
         * @public
         * @readonly
         */
        readonly enforceQuality: BOOLEAN,
        /**
         * @summary `compusecQuality`.
         * @public
         * @readonly
         */
        readonly compusecQuality: CompusecQuality,
        /**
         * @summary `cryptoQuality`.
         * @public
         * @readonly
         */
        readonly cryptoQuality: CryptoQuality,
        /**
         * @summary `keyStorageQuality`.
         * @public
         * @readonly
         */
        readonly keyStorageQuality: INTEGER
    ) {}

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
    if (!_cached_encoder_for_Quality) { _cached_encoder_for_Quality = function (value: Quality, elGetter: $.ASN1Encoder<Quality>): _Element {
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

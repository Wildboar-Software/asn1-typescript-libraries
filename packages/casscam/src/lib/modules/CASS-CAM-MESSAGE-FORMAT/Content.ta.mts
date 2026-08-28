/* eslint-disable */
import {
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
 * @summary Content
 * @description
 *
 * Plaintext inside normal-mode `RSAEncryptedContent`:
 * common and individual hash keys, three AC randoms for
 * key derivation, and the key pairing key. ITU-T Rec.
 * J.1003 (10/2014)
 * [§7.2](https://www.itu.int/rec/T-REC-J.1003-201410-I),
 * §7.3, §8.3, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Content ::= SEQUENCE {
 *     cHK        OCTET STRING(SIZE (20)),
 *     iHK        OCTET STRING(SIZE (20)),
 *     rAND-AC-1  OCTET STRING(SIZE (16)),
 *     rAND-AC-2  OCTET STRING(SIZE (16)),
 *     rAND-AC-3  OCTET STRING(SIZE (16)),
 *     kPK        OCTET STRING(SIZE (20)) }
 * ```
 * 
 */
export
class Content {
    constructor (
        /**
         * @summary `cHK`.
         * @description
         *
         * Common hash key (CHK), 20 octets.
         * `CHK = SHA1[RANDCHK||CASS_Info]` (§8.3). HMAC
         * key for RCASAnnounce/RCASRenewal. The CAM must
         * obtain a new CHK via KeyResponse if virgin,
         * CASS-zone move, or CHK mismatch (§7.1).
         *
         * @public
         * @readonly
         */
        readonly cHK: OCTET_STRING,
        /**
         * @summary `iHK`.
         * @description
         *
         * Individual hash key (IHK), 20 octets.
         * `IHK = SHA1[RANDIHK||CASS_IP||Key_Paring_ID]`
         * (§8.3). HMAC key for CAMRegConfirm (§7.3).
         *
         * @public
         * @readonly
         */
        readonly iHK: OCTET_STRING,
        /**
         * @summary `rAND_AC_1`.
         * @description
         *
         * First of three RAND_AC values, 16 octets,
         * unique among the three (§8.3). With pre-shared
         * Ki, used to produce Kc (COMP128-4 /
         * GSM-MILENAGE recommended) for MEK and ICCIEK
         * generation (Figure 4, §7.3).
         *
         * @public
         * @readonly
         */
        readonly rAND_AC_1: OCTET_STRING,
        /**
         * @summary `rAND_AC_2`.
         * @description
         *
         * Second RAND_AC value, 16 octets, unique among
         * the three (§8.3). See `rAND_AC_1`.
         *
         * @public
         * @readonly
         */
        readonly rAND_AC_2: OCTET_STRING,
        /**
         * @summary `rAND_AC_3`.
         * @description
         *
         * Third RAND_AC value, 16 octets, unique among
         * the three (§8.3). See `rAND_AC_1`.
         *
         * @public
         * @readonly
         */
        readonly rAND_AC_3: OCTET_STRING,
        /**
         * @summary `kPK`.
         * @description
         *
         * Key pairing key (KPK), 20 octets. The AC
         * generates it if KeyPairingID is valid
         * (§3.2.2).
         *
         * @public
         * @readonly
         */
        readonly kPK: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a Content
     * @description
     * 
     * This takes an `object` and converts it to a `Content`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Content`.
     * @returns {Content}
     */
    public static _from_object (_o: { [_K in keyof (Content)]: (Content)[_K] }): Content {
        return new Content(_o.cHK, _o.iHK, _o.rAND_AC_1, _o.rAND_AC_2, _o.rAND_AC_3, _o.kPK);
    }


}


/**
 * @summary The Leading Root Component Types of Content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Content: $.ComponentSpec[] = [
    new $.ComponentSpec("cHK", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iHK", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rAND-AC-1", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rAND-AC-2", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rAND-AC-3", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("kPK", false, $.hasTag(_TagClass.context, 5))
];


/**
 * @summary The Trailing Root Component Types of Content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Content: $.ComponentSpec[] = [
    
];


/**
 * @summary The Extension Addition Component Types of Content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Content: $.ComponentSpec[] = [
    
];


let _cached_decoder_for_Content: $.ASN1Decoder<Content> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Content
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Content} The decoded data structure.
 */
export
function _decode_Content (el: _Element): Content {
    if (!_cached_decoder_for_Content) { _cached_decoder_for_Content = function (el: _Element): Content {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("Content contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cHK";
    sequence[1].name = "iHK";
    sequence[2].name = "rAND-AC-1";
    sequence[3].name = "rAND-AC-2";
    sequence[4].name = "rAND-AC-3";
    sequence[5].name = "kPK";
    let cHK!: OCTET_STRING;
    let iHK!: OCTET_STRING;
    let rAND_AC_1!: OCTET_STRING;
    let rAND_AC_2!: OCTET_STRING;
    let rAND_AC_3!: OCTET_STRING;
    let kPK!: OCTET_STRING;
    cHK = $._decodeOctetString(sequence[0]);
    iHK = $._decodeOctetString(sequence[1]);
    rAND_AC_1 = $._decodeOctetString(sequence[2]);
    rAND_AC_2 = $._decodeOctetString(sequence[3]);
    rAND_AC_3 = $._decodeOctetString(sequence[4]);
    kPK = $._decodeOctetString(sequence[5]);
    return new Content(
        cHK,
        iHK,
        rAND_AC_1,
        rAND_AC_2,
        rAND_AC_3,
        kPK,

    );
}; }
    return _cached_decoder_for_Content(el);
}


let _cached_encoder_for_Content: $.ASN1Encoder<Content> | null = null;


/**
 * @summary Encodes a(n) Content into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Content, encoded as an ASN.1 Element.
 */
export
function _encode_Content (value: Content, elGetter: $.ASN1Encoder<Content>): _Element {
    if (!_cached_encoder_for_Content) { _cached_encoder_for_Content = function (value: Content): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.cHK, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.iHK, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.rAND_AC_1, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.rAND_AC_2, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.rAND_AC_3, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.kPK, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Content(value, elGetter);
}


/* eslint-enable */

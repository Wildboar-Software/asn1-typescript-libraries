/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { VersionType, _decode_VersionType, _encode_VersionType } from "../RSPDefinitions/VersionType.ta.mjs";


/**
 * @summary EUICCInfo1
 * @description
 * 
 * Subset of eUICC information that may be sent to an RSP Server before that
 * server is authenticated. It carries the supported SGP.22 version and the eSIM
 * CA Root CA public-key identifiers the eUICC can use to verify signatures and
 * to create them. The server uses the lists to pick CERT.DPauth.SIG or
 * CERT.DSauth.SIG and to tell the eUICC which CI key to sign with. SGP.22 v3.1
 * §4.3 and §5.6.1. v3.1 adds `euiccCiPKIdListForSigningV3`,
 * `euiccRspCapability`, and `highestSvn`, which this module places only on
 * `EUICCInfo2` (and marks unused).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUICCInfo1 ::= [32] SEQUENCE { -- Tag 'BF20'
 *     svn [2] VersionType,     -- GSMA SGP.22 version supported (SVN)
 *     euiccCiPKIdListForVerification [9] SEQUENCE OF SubjectKeyIdentifier, -- List of CI Public Key Identifiers supported on the eUICC for signature verification
 *     euiccCiPKIdListForSigning [10] SEQUENCE OF SubjectKeyIdentifier -- List of CI Public Key Identifier supported on the eUICC for signature creation
 * }
 * ```
 * 
 * @class
 */
export
class EUICCInfo1 {
    constructor (
        /**
         * @summary `svn`.
         * @description
         * 
         * SGP.22 version the eUICC supports. v3.1 Annex H names the
         * corresponding field `lowestSvn`. The SM-DP+ rejects a version it does
         * not support. SGP.22 v3.1 §4.3 and §5.6.1.
         * 
         * @public
         * @readonly
         */
        readonly svn: VersionType,
        /**
         * @summary `euiccCiPKIdListForVerification`.
         * @description
         * 
         * Subject key identifiers of eSIM CA Root CA keys the eUICC can use to
         * verify signatures. The server must choose a CERT.DPauth.SIG or
         * CERT.DSauth.SIG that chains to one of these. SGP.22 v3.1 §4.3 and
         * §5.6.1.
         * 
         * @public
         * @readonly
         */
        readonly euiccCiPKIdListForVerification: OCTET_STRING[],
        /**
         * @summary `euiccCiPKIdListForSigning`.
         * @description
         * 
         * Subject key identifiers of eSIM CA Root CA keys under which the eUICC
         * can create signatures that a Variant O chain can verify. The server
         * picks one and returns it as `euiccCiPKIdToBeUsed`. SGP.22 v3.1 §4.3.
         * v3.1 separates Variant Ov3/A/B/C keys into
         * `euiccCiPKIdListForSigningV3`.
         * 
         * @public
         * @readonly
         */
        readonly euiccCiPKIdListForSigning: OCTET_STRING[]
    ) {}

    /**
     * @summary Restructures an object into a EUICCInfo1
     * @description
     * 
     * This takes an `object` and converts it to a `EUICCInfo1`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EUICCInfo1`.
     * @returns {EUICCInfo1}
     */
    public static _from_object (_o: { [_K in keyof (EUICCInfo1)]: (EUICCInfo1)[_K] }): EUICCInfo1 {
        return new EUICCInfo1(_o.svn, _o.euiccCiPKIdListForVerification, _o.euiccCiPKIdListForSigning);
    }


}

/**
 * @summary The Leading Root Component Types of EUICCInfo1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EUICCInfo1: $.ComponentSpec[] = [
    new $.ComponentSpec("svn", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("euiccCiPKIdListForVerification", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("euiccCiPKIdListForSigning", false, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of EUICCInfo1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EUICCInfo1: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EUICCInfo1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EUICCInfo1: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EUICCInfo1: $.ASN1Decoder<EUICCInfo1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EUICCInfo1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EUICCInfo1 (el: _Element): EUICCInfo1 {
    if (!_cached_decoder_for_EUICCInfo1) { _cached_decoder_for_EUICCInfo1 = $._decode_implicit<EUICCInfo1>(() => function (el: _Element): EUICCInfo1 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("EUICCInfo1 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "svn";
    sequence[1].name = "euiccCiPKIdListForVerification";
    sequence[2].name = "euiccCiPKIdListForSigning";
    let svn!: VersionType;
    let euiccCiPKIdListForVerification!: OCTET_STRING[];
    let euiccCiPKIdListForSigning!: OCTET_STRING[];
    svn = $._decode_implicit<VersionType>(() => _decode_VersionType)(sequence[0]);
    euiccCiPKIdListForVerification = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(sequence[1]);
    euiccCiPKIdListForSigning = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(sequence[2]);
    return new EUICCInfo1(
        svn,
        euiccCiPKIdListForVerification,
        euiccCiPKIdListForSigning,

    );
}); }
    return _cached_decoder_for_EUICCInfo1(el);
}

let _cached_encoder_for_EUICCInfo1: $.ASN1Encoder<EUICCInfo1> | null = null;

/**
 * @summary Encodes a(n) EUICCInfo1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EUICCInfo1, encoded as an ASN.1 Element.
 */
export
function _encode_EUICCInfo1 (value: EUICCInfo1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EUICCInfo1) { _cached_encoder_for_EUICCInfo1 = $._encode_implicit(_TagClass.context, 32, () => function (value: EUICCInfo1): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_VersionType, $.BER)(value.svn, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.euiccCiPKIdListForVerification, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.euiccCiPKIdListForSigning, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EUICCInfo1(value, elGetter);
}


/* eslint-enable */

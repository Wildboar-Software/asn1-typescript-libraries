/* eslint-disable */
import {
    OPTIONAL,
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
import { RandomNumber, _decode_RandomNumber, _encode_RandomNumber } from "../SASL-9798-3-1997/RandomNumber.ta.mjs";
import { CertData, _decode_CertData, _encode_CertData } from "../SASL-9798-3-1997/CertData.ta.mjs";
import { SIGNATURE, _decode_SIGNATURE, _encode_SIGNATURE } from "../SASL-9798-3-1997/SIGNATURE.ta.mjs";
import { _decode_TBSDataAB, _encode_TBSDataAB } from "../SASL-9798-3-1997/TBSDataAB.ta.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "@wildboar/x500/CertificateExtensions";


/**
 * @summary TokenAB
 * @description
 *
 * Client→server token in unilateral and mutual modes (RFC 3163 §3.2).
 * Carries the client's nonce `randomA` (R_A), optional server identity,
 * client certification data, optional authorization identity, and a
 * `SIGNATURE` over DER-encoded `TBSDataAB`.
 *
 * The server verifies the client's signature (including PKIX path
 * processing per RFC 2459), that signed `randomB` matches the R_B it
 * sent in `TokenBA1`, and that `entityB`, if present, matches the
 * server's distinguishing identifier (RFC 3163 §2.4 / §2.5).
 *
 * Constraint (ASN.1 `CONSTRAINED BY`):
 *
 * > The `entityB` and `authID` fields shall be included in `TokenAB`
 * > if and only if they are also included in `TBSDataAB`. The
 * > `entityB` field SHOULD be present in `TokenAB` whenever the
 * > client believes it knows the identity of the server.
 *
 * PDUs SHALL be DER-encoded before transmission (RFC 3163 §3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenAB ::= SEQUENCE {
 *     randomA   RandomNumber,
 *     entityB   [0] GeneralNames OPTIONAL,
 *     certA     [1] CertData,
 *     authID    [2] GeneralNames OPTIONAL,
 *     signature SIGNATURE { TBSDataAB }
 * }(CONSTRAINED BY {-- The entityB and authID fields shall be included
 *     -- in TokenAB if and only if they are also included in TBSDataAB.
 *     -- The entityB field SHOULD be present in TokenAB whenever the
 *     -- client believes it knows the identity of the server.--})
 * ```
 *
 */
export
class TokenAB {
    constructor (
        /**
         * @summary `randomA`.
         * @description
         *
         * Client nonce R_A. Included in the signed material so the
         * server cannot obtain a client signature on data chosen before
         * authentication starts (RFC 3163 §7). MUST be from a
         * cryptographically strong RNG (RFC 3163 §7).
         *
         * @public
         * @readonly
         */
        readonly randomA: RandomNumber,
        /**
         * @summary `entityB`.
         * @description
         *
         * Optional server identity. SHALL be present in `TokenAB` iff
         * also present in `TBSDataAB`. SHOULD be present whenever the
         * client believes it knows the server's identity
         * (RFC 3163 §3.2).
         *
         * @public
         * @readonly
         */
        readonly entityB: OPTIONAL<GeneralNames>,
        /**
         * @summary `certA`.
         * @description
         *
         * Client's X.509 certificate (or URL) and related chain sent to
         * the server (RFC 3163 §3.2 / §3.5).
         *
         * @public
         * @readonly
         */
        readonly certA: CertData,
        /**
         * @summary `authID`.
         * @description
         *
         * Authorization identity when access-control identity differs
         * from the signer's certificate identity. If absent, the
         * identity from the client's X.509 certificate shall be used
         * (RFC 3163 §3.2). SHALL be present in `TokenAB` iff also
         * present in `TBSDataAB`.
         *
         * @public
         * @readonly
         */
        readonly authID: OPTIONAL<GeneralNames>,
        /**
         * @summary `signature`.
         * @description
         *
         * Client signature over DER-encoded `TBSDataAB`
         * (`SIGNATURE { TBSDataAB }`) (RFC 3163 §3.2 / §3.7).
         *
         * @public
         * @readonly
         */
        readonly signature: SIGNATURE,
    ) {}

    /**
     * @summary Restructures an object into a TokenAB
     * @description
     *
     * This takes an `object` and converts it to a `TokenAB`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TokenAB`.
     * @returns {TokenAB}
     */
    public static _from_object (_o: { [_K in keyof (TokenAB)]: (TokenAB)[_K] }): TokenAB {
        return new TokenAB(_o.randomA, _o.entityB, _o.certA, _o.authID, _o.signature);
    }


}


/**
 * @summary The Leading Root Component Types of TokenAB
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TokenAB: $.ComponentSpec[] = [
    new $.ComponentSpec("randomA", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("entityB", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("certA", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("authID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 16))
];


/**
 * @summary The Trailing Root Component Types of TokenAB
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TokenAB: $.ComponentSpec[] = [

];


/**
 * @summary The Extension Addition Component Types of TokenAB
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_TokenAB: $.ComponentSpec[] = [

];


let _cached_decoder_for_TokenAB: $.ASN1Decoder<TokenAB> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TokenAB
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TokenAB} The decoded data structure.
 */
export
function _decode_TokenAB (el: _Element): TokenAB {
    if (!_cached_decoder_for_TokenAB) { _cached_decoder_for_TokenAB = function (el: _Element): TokenAB {
    let randomA!: RandomNumber;
    let entityB: OPTIONAL<GeneralNames>;
    let certA!: CertData;
    let authID: OPTIONAL<GeneralNames>;
    let signature!: SIGNATURE;
    const callbacks: $.DecodingMap = {
        "randomA": (_el: _Element): void => { randomA = _decode_RandomNumber(_el); },
        "entityB": (_el: _Element): void => { entityB = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "certA": (_el: _Element): void => { certA = $._decode_explicit<CertData>(() => _decode_CertData)(_el); },
        "authID": (_el: _Element): void => { authID = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "signature": (_el: _Element): void => { signature = _decode_SIGNATURE(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TokenAB,
        _extension_additions_list_spec_for_TokenAB,
        _root_component_type_list_2_spec_for_TokenAB,
        undefined,
    );
    return new TokenAB( 
        randomA,
        entityB,
        certA,
        authID,
        signature
    );
}; }
    return _cached_decoder_for_TokenAB(el);
}


let _cached_encoder_for_TokenAB: $.ASN1Encoder<TokenAB> | null = null;


/**
 * @summary Encodes a(n) TokenAB into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenAB, encoded as an ASN.1 Element.
 */
export
function _encode_TokenAB (value: TokenAB, elGetter: $.ASN1Encoder<TokenAB>): _Element {
    if (!_cached_encoder_for_TokenAB) { _cached_encoder_for_TokenAB = function (value: TokenAB): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RandomNumber(value.randomA, $.BER),
            /* IF_ABSENT  */ ((value.entityB === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GeneralNames, $.BER)(value.entityB, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_CertData, $.BER)(value.certA, $.BER),
            /* IF_ABSENT  */ ((value.authID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GeneralNames, $.BER)(value.authID, $.BER)),
            /* REQUIRED   */ _encode_SIGNATURE(value.signature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TokenAB(value, elGetter);
}


/* eslint-enable */

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
import { _decode_TBSDataBA, _encode_TBSDataBA } from "../SASL-9798-3-1997/TBSDataBA.ta.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "@wildboar/x500/CertificateExtensions";



/**
 * @summary TokenBA2
 * @description
 *
 * Second server→client token, used only in mutual authentication
 * (`9798-M-*`) (RFC 3163 §3.3 / §2.5). Carries a third nonce
 * `randomC` (R_C), optional client identity, server certification
 * data, and a `SIGNATURE` over DER-encoded `TBSDataBA`.
 *
 * The client verifies the server's signature (including PKIX path
 * processing), that signed `randomB` / `randomA` match the values
 * from steps 1 and 2, and that `entityA`, if present, matches the
 * client's distinguishing identifier (RFC 3163 §2.5).
 *
 * Constraint (ASN.1 `CONSTRAINED BY`):
 *
 * > The `entityA` field shall be included in `TokenBA2` if and only
 * > if it is also included in `TBSDataBA`. The `entityA` field SHOULD
 * > be present and MUST contain the client's name from their X.509
 * > certificate.
 *
 * R_C is included because R_B is already known to the client before
 * R_A is chosen, so R_B alone does not give the server the same
 * chosen-data protection that R_A gives the client (RFC 3163 §7).
 *
 * PDUs SHALL be DER-encoded before transmission (RFC 3163 §3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenBA2 ::= SEQUENCE {
 *     randomC   RandomNumber,
 *     entityA   [0] GeneralNames OPTIONAL,
 *     certB     [1] CertData,
 *     signature SIGNATURE { TBSDataBA }
 * }(CONSTRAINED BY {-- The entityA field shall be included in TokenBA2
 *     -- if and only if it is also included in TBSDataBA.  The entityA
 *     -- field SHOULD be present and MUST contain the client's name
 *     -- from their X.509 certificate.--})
 * ```
 *
 */
export
class TokenBA2 {
    constructor (
        /**
         * @summary `randomC`.
         * @description
         *
         * Third random R_C chosen by the server for mutual
         * authentication (RFC 3163 §2.5 / §7). MUST be from a
         * cryptographically strong RNG (RFC 3163 §7).
         *
         * @public
         * @readonly
         */
        readonly randomC: RandomNumber,
        /**
         * @summary `entityA`.
         * @description
         *
         * Optional client identity. SHALL be present in `TokenBA2` iff
         * also present in `TBSDataBA`. SHOULD be present and MUST
         * contain the client's name from their X.509 certificate
         * (RFC 3163 §3.3).
         *
         * @public
         * @readonly
         */
        readonly entityA: OPTIONAL<GeneralNames>,
        /**
         * @summary `certB`.
         * @description
         *
         * Server's X.509 certificate and related chain sent to the
         * client (RFC 3163 §3.3 / §3.5).
         *
         * @public
         * @readonly
         */
        readonly certB: CertData,
        /**
         * @summary `signature`.
         * @description
         *
         * Server signature over DER-encoded `TBSDataBA`
         * (`SIGNATURE { TBSDataBA }`) (RFC 3163 §3.3 / §3.7).
         *
         * @public
         * @readonly
         */
        readonly signature: SIGNATURE,
    ) {}

    /**
     * @summary Restructures an object into a TokenBA2
     * @description
     *
     * This takes an `object` and converts it to a `TokenBA2`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TokenBA2`.
     * @returns {TokenBA2}
     */
    public static _from_object (_o: { [_K in keyof (TokenBA2)]: (TokenBA2)[_K] }): TokenBA2 {
        return new TokenBA2(_o.randomC, _o.entityA, _o.certB, _o.signature);
    }


}


/**
 * @summary The Leading Root Component Types of TokenBA2
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TokenBA2: $.ComponentSpec[] = [
    new $.ComponentSpec("randomC", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("entityA", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("certB", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 16))
];


/**
 * @summary The Trailing Root Component Types of TokenBA2
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TokenBA2: $.ComponentSpec[] = [

];


/**
 * @summary The Extension Addition Component Types of TokenBA2
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_TokenBA2: $.ComponentSpec[] = [

];


let _cached_decoder_for_TokenBA2: $.ASN1Decoder<TokenBA2> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TokenBA2
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TokenBA2} The decoded data structure.
 */
export
function _decode_TokenBA2 (el: _Element): TokenBA2 {
    if (!_cached_decoder_for_TokenBA2) { _cached_decoder_for_TokenBA2 = function (el: _Element): TokenBA2 {
    let randomC!: RandomNumber;
    let entityA: OPTIONAL<GeneralNames>;
    let certB!: CertData;
    let signature!: SIGNATURE;
    const callbacks: $.DecodingMap = {
        "randomC": (_el: _Element): void => { randomC = _decode_RandomNumber(_el); },
        "entityA": (_el: _Element): void => { entityA = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "certB": (_el: _Element): void => { certB = $._decode_explicit<CertData>(() => _decode_CertData)(_el); },
        "signature": (_el: _Element): void => { signature = _decode_SIGNATURE(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TokenBA2,
        _extension_additions_list_spec_for_TokenBA2,
        _root_component_type_list_2_spec_for_TokenBA2,
        undefined,
    );
    return new TokenBA2( 
        randomC,
        entityA,
        certB,
        signature
    );
}; }
    return _cached_decoder_for_TokenBA2(el);
}


let _cached_encoder_for_TokenBA2: $.ASN1Encoder<TokenBA2> | null = null;


/**
 * @summary Encodes a(n) TokenBA2 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenBA2, encoded as an ASN.1 Element.
 */
export
function _encode_TokenBA2 (value: TokenBA2, elGetter: $.ASN1Encoder<TokenBA2>): _Element {
    if (!_cached_encoder_for_TokenBA2) { _cached_encoder_for_TokenBA2 = function (value: TokenBA2): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RandomNumber(value.randomC, $.BER),
            /* IF_ABSENT  */ ((value.entityA === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GeneralNames, $.BER)(value.entityA, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_CertData, $.BER)(value.certB, $.BER),
            /* REQUIRED   */ _encode_SIGNATURE(value.signature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TokenBA2(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
import { Name, _decode_Name, _encode_Name } from "@wildboar/x500/InformationFramework";
import { Certificate, _decode_Certificate, _encode_Certificate } from "@wildboar/x500/AuthenticationFramework";
import { CertificatePoliciesSyntax, _decode_CertificatePoliciesSyntax, _encode_CertificatePoliciesSyntax } from "@wildboar/x500/CertificateExtensions";
import { CertPolicyFlags, _decode_CertPolicyFlags, _encode_CertPolicyFlags } from "../TrustAnchorInfoModule/CertPolicyFlags.ta.mjs";
import { NameConstraintsSyntax, _decode_NameConstraintsSyntax, _encode_NameConstraintsSyntax } from "@wildboar/x500/CertificateExtensions";


/**
 * @summary CertPathControls
 * @description
 *
 * Controls needed to initialize an X.509 certification path validation
 * algorithm implementation ([RFC 5280 §6](https://datatracker.ietf.org/doc/html/rfc5280#section-6)).
 * Carried in optional `TrustAnchorInfo.certPath`
 * ([RFC 5914 §2.5](https://datatracker.ietf.org/doc/html/rfc5914#section-2.5)).
 * When validating a path, applications SHOULD NOT ignore these
 * limitations but MAY tighten them (subset of policies/names, TRUE
 * policy flags, smaller `pathLenConstraint`, extra excluded names).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertPathControls ::= SEQUENCE {
 *     taName           Name,
 *     certificate      [0] Certificate OPTIONAL,
 *     policySet        [1] CertificatePolicies OPTIONAL,
 *     policyFlags      [2] CertPolicyFlags OPTIONAL,
 *     nameConstr       [3] NameConstraints OPTIONAL,
 *     pathLenConstraint[4] INTEGER (0..MAX) OPTIONAL}
 * ```
 *
 */
export
class CertPathControls {
    constructor (
        /**
         * @summary `taName`.
         * @description
         *
         * X.500 distinguished name associated with the trust anchor,
         * used to construct and validate an X.509 certification path.
         * MUST NOT be an empty sequence
         * ([RFC 5914 §2.5](https://datatracker.ietf.org/doc/html/rfc5914#section-2.5)).
         *
         * @public
         * @readonly
         */
        readonly taName: Name,
        /**
         * @summary `certificate`.
         * @description
         *
         * Optional X.509 certificate representing the trust anchor in
         * path development and validation. If present: subject MUST
         * exactly match `taName`, public key MUST exactly match
         * `TrustAnchorInfo.pubKey`, and `subjectKeyIdentifier` (if
         * present) MUST exactly match `TrustAnchorInfo.keyId`
         * ([RFC 5914 §2.5](https://datatracker.ietf.org/doc/html/rfc5914#section-2.5)).
         *
         * Correspondence with TrustAnchorInfo fields (TrustAnchorInfo
         * values always enforced; certificate extensions only if no
         * corresponding TrustAnchorInfo value):
         *
         * - `id-ce-certificatePolicies` ↔ `policySet`
         * - `id-ce-policyConstraints` ↔ `inhibitPolicyMapping` /
         *   `requireExplicitPolicy`
         * - `id-ce-inhibitAnyPolicy` ↔ `inhibitAnyPolicy`
         * - `id-ce-nameConstraints` ↔ `nameConstr`
         * - `BasicConstraints.pathLenConstraint` ↔ `pathLenConstraint`
         *   (presence of `CertPathControls` corresponds to `cA` TRUE)
         * - any other extension ↔ same type in `TrustAnchorInfo.exts`
         *
         * @public
         * @readonly
         */
        readonly certificate?: OPTIONAL<Certificate>,
        /**
         * @summary `policySet`.
         * @description
         *
         * Optional sequence of certificate policy identifiers as inputs
         * to path validation. When absent, the special value any-policy
         * is provided. Syntax/semantics of `CertificatePolicies` as in
         * [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280); in
         * this context `policyQualifiers` MUST NOT be included
         * ([RFC 5914 §2.5](https://datatracker.ietf.org/doc/html/rfc5914#section-2.5)).
         *
         * @public
         * @readonly
         */
        readonly policySet?: OPTIONAL<CertificatePoliciesSyntax>,
        /**
         * @summary `policyFlags`.
         * @description
         *
         * Optional BIT STRING of three Boolean inputs to path validation.
         * When absent, the input is `{ FALSE, FALSE, FALSE }` (most
         * liberal). See `CertPolicyFlags` named bits
         * ([RFC 5914 §2.5](https://datatracker.ietf.org/doc/html/rfc5914#section-2.5)).
         *
         * @public
         * @readonly
         */
        readonly policyFlags?: OPTIONAL<CertPolicyFlags>,
        /**
         * @summary `nameConstr`.
         * @description
         *
         * Optional name constraints with the same syntax and semantics
         * as the Name Constraints certificate extension
         * ([RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280)).
         * Sets `initial-permitted-subtrees` and
         * `initial-excluded-subtrees` for path validation
         * ([RFC 5280 §6.1.1](https://datatracker.ietf.org/doc/html/rfc5280#section-6.1.1)).
         * When absent, permitted is unbounded and excluded is empty
         * ([RFC 5914 §2.5](https://datatracker.ietf.org/doc/html/rfc5914#section-2.5)).
         *
         * @public
         * @readonly
         */
        readonly nameConstr?: OPTIONAL<NameConstraintsSyntax>,
        /**
         * @summary `pathLenConstraint`.
         * @description
         *
         * Maximum number of non-self-issued intermediate certificates
         * that may follow this trust anchor in a valid path.
         *
         * > A pathLenConstraint of zero indicates that no non-self-issued
         * > intermediate certification authority (CA) certificates may
         * > follow in a valid certification path. Where it appears, the
         * > pathLenConstraint field MUST be greater than or equal to
         * > zero. Where pathLenConstraint does not appear, no limit is
         * > imposed.
         * >
         * > — [RFC 5914 §2.5](https://datatracker.ietf.org/doc/html/rfc5914#section-2.5)
         *
         * @public
         * @readonly
         */
        readonly pathLenConstraint?: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a CertPathControls
     * @description
     *
     * This takes an `object` and converts it to a `CertPathControls`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertPathControls`.
     * @returns {CertPathControls}
     */
    public static _from_object (_o: { [_K in keyof (CertPathControls)]: (CertPathControls)[_K] }): CertPathControls {
        return new CertPathControls(_o.taName, _o.certificate, _o.policySet, _o.policyFlags, _o.nameConstr, _o.pathLenConstraint);
    }


}

/**
 * @summary The Leading Root Component Types of CertPathControls
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertPathControls: $.ComponentSpec[] = [
    new $.ComponentSpec("taName", false, $.hasAnyTag),
    new $.ComponentSpec("certificate", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("policySet", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("policyFlags", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nameConstr", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pathLenConstraint", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CertPathControls
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertPathControls: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of CertPathControls
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_CertPathControls: $.ComponentSpec[] = [

];

let _cached_decoder_for_CertPathControls: $.ASN1Decoder<CertPathControls> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertPathControls
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertPathControls} The decoded data structure.
 */
export
function _decode_CertPathControls (el: _Element): CertPathControls {
    if (!_cached_decoder_for_CertPathControls) { _cached_decoder_for_CertPathControls = function (el: _Element): CertPathControls {
    let taName!: Name;
    let certificate: OPTIONAL<Certificate>;
    let policySet: OPTIONAL<CertificatePoliciesSyntax>;
    let policyFlags: OPTIONAL<CertPolicyFlags>;
    let nameConstr: OPTIONAL<NameConstraintsSyntax>;
    let pathLenConstraint: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "taName": (_el: _Element): void => { taName = _decode_Name(_el); },
        "certificate": (_el: _Element): void => { certificate = $._decode_implicit<Certificate>(() => _decode_Certificate)(_el); },
        "policySet": (_el: _Element): void => { policySet = $._decode_implicit<CertificatePoliciesSyntax>(() => _decode_CertificatePoliciesSyntax)(_el); },
        "policyFlags": (_el: _Element): void => { policyFlags = $._decode_implicit<CertPolicyFlags>(() => _decode_CertPolicyFlags)(_el); },
        "nameConstr": (_el: _Element): void => { nameConstr = $._decode_implicit<NameConstraintsSyntax>(() => _decode_NameConstraintsSyntax)(_el); },
        "pathLenConstraint": (_el: _Element): void => { pathLenConstraint = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertPathControls,
        _extension_additions_list_spec_for_CertPathControls,
        _root_component_type_list_2_spec_for_CertPathControls,
        undefined,
    );
    return new CertPathControls(
        taName,
        certificate,
        policySet,
        policyFlags,
        nameConstr,
        pathLenConstraint
    );
}; }
    return _cached_decoder_for_CertPathControls(el);
}

let _cached_encoder_for_CertPathControls: $.ASN1Encoder<CertPathControls> | null = null;

/**
 * @summary Encodes a(n) CertPathControls into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertPathControls, encoded as an ASN.1 Element.
 */
export
function _encode_CertPathControls (value: CertPathControls, elGetter: $.ASN1Encoder<CertPathControls>): _Element {
    if (!_cached_encoder_for_CertPathControls) { _cached_encoder_for_CertPathControls = function (value: CertPathControls): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Name(value.taName, $.DER),
            /* IF_ABSENT  */ ((value.certificate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Certificate, $.DER)(value.certificate, $.DER)),
            /* IF_ABSENT  */ ((value.policySet === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CertificatePoliciesSyntax, $.DER)(value.policySet, $.DER)),
            /* IF_ABSENT  */ ((value.policyFlags === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CertPolicyFlags, $.DER)(value.policyFlags, $.DER)),
            /* IF_ABSENT  */ ((value.nameConstr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NameConstraintsSyntax, $.DER)(value.nameConstr, $.DER)),
            /* IF_ABSENT  */ ((value.pathLenConstraint === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.DER)(value.pathLenConstraint, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_CertPathControls(value, elGetter);
}


/* eslint-enable */

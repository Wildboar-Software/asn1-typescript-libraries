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
         * @public
         * @readonly
         */
        readonly taName: Name,
        /**
         * @summary `certificate`.
         * @public
         * @readonly
         */
        readonly certificate: OPTIONAL<Certificate>,
        /**
         * @summary `policySet`.
         * @public
         * @readonly
         */
        readonly policySet: OPTIONAL<CertificatePoliciesSyntax>,
        /**
         * @summary `policyFlags`.
         * @public
         * @readonly
         */
        readonly policyFlags: OPTIONAL<CertPolicyFlags>,
        /**
         * @summary `nameConstr`.
         * @public
         * @readonly
         */
        readonly nameConstr: OPTIONAL<NameConstraintsSyntax>,
        /**
         * @summary `pathLenConstraint`.
         * @public
         * @readonly
         */
        readonly pathLenConstraint: OPTIONAL<INTEGER>
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

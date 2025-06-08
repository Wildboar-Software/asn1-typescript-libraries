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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { Name, _decode_Name, _encode_Name } from "@wildboar/x500/src/lib/modules/InformationFramework/Name.ta";
import { Certificate, _decode_Certificate, _encode_Certificate } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta";
import { CertificatePoliciesSyntax, _decode_CertificatePoliciesSyntax, _encode_CertificatePoliciesSyntax } from "@wildboar/x500/src/lib/modules/CertificateExtensions/CertificatePoliciesSyntax.ta";
import { CertPolicyFlags, CertPolicyFlags_inhibitPolicyMapping /* IMPORTED_LONG_NAMED_BIT */, inhibitPolicyMapping /* IMPORTED_SHORT_NAMED_BIT */, CertPolicyFlags_requireExplicitPolicy /* IMPORTED_LONG_NAMED_BIT */, requireExplicitPolicy /* IMPORTED_SHORT_NAMED_BIT */, CertPolicyFlags_inhibitAnyPolicy /* IMPORTED_LONG_NAMED_BIT */, inhibitAnyPolicy /* IMPORTED_SHORT_NAMED_BIT */, _decode_CertPolicyFlags, _encode_CertPolicyFlags } from "../TrustAnchorInfoModule/CertPolicyFlags.ta";
import { NameConstraintsSyntax, _decode_NameConstraintsSyntax, _encode_NameConstraintsSyntax } from "@wildboar/x500/src/lib/modules/CertificateExtensions/NameConstraintsSyntax.ta";


/* START_OF_SYMBOL_DEFINITION CertPathControls */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION CertPathControls */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertPathControls */
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
    new $.ComponentSpec("taName", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("certificate", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("policySet", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("policyFlags", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("nameConstr", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("pathLenConstraint", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertPathControls */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertPathControls */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertPathControls */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertPathControls */
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
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertPathControls */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertPathControls */
let _cached_decoder_for_CertPathControls: $.ASN1Decoder<CertPathControls> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertPathControls */

/* START_OF_SYMBOL_DEFINITION _decode_CertPathControls */
/**
 * @summary Decodes an ASN.1 element into a(n) CertPathControls
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertPathControls} The decoded data structure.
 */
export
function _decode_CertPathControls (el: _Element) {
    if (!_cached_decoder_for_CertPathControls) { _cached_decoder_for_CertPathControls = function (el: _Element): CertPathControls {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let taName!: Name;
    let certificate: OPTIONAL<Certificate>;
    let policySet: OPTIONAL<CertificatePoliciesSyntax>;
    let policyFlags: OPTIONAL<CertPolicyFlags>;
    let nameConstr: OPTIONAL<NameConstraintsSyntax>;
    let pathLenConstraint: OPTIONAL<INTEGER>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "taName": (_el: _Element): void => { taName = _decode_Name(_el); },
        "certificate": (_el: _Element): void => { certificate = $._decode_implicit<Certificate>(() => _decode_Certificate)(_el); },
        "policySet": (_el: _Element): void => { policySet = $._decode_implicit<CertificatePoliciesSyntax>(() => _decode_CertificatePoliciesSyntax)(_el); },
        "policyFlags": (_el: _Element): void => { policyFlags = $._decode_implicit<CertPolicyFlags>(() => _decode_CertPolicyFlags)(_el); },
        "nameConstr": (_el: _Element): void => { nameConstr = $._decode_implicit<NameConstraintsSyntax>(() => _decode_NameConstraintsSyntax)(_el); },
        "pathLenConstraint": (_el: _Element): void => { pathLenConstraint = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertPathControls,
        _extension_additions_list_spec_for_CertPathControls,
        _root_component_type_list_2_spec_for_CertPathControls,
        undefined,
    );
    return new CertPathControls( /* SEQUENCE_CONSTRUCTOR_CALL */
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
/* END_OF_SYMBOL_DEFINITION _decode_CertPathControls */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertPathControls */
let _cached_encoder_for_CertPathControls: $.ASN1Encoder<CertPathControls> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertPathControls */

/* START_OF_SYMBOL_DEFINITION _encode_CertPathControls */
/**
 * @summary Encodes a(n) CertPathControls into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertPathControls, encoded as an ASN.1 Element.
 */
export
function _encode_CertPathControls (value: CertPathControls, elGetter: $.ASN1Encoder<CertPathControls>) {
    if (!_cached_encoder_for_CertPathControls) { _cached_encoder_for_CertPathControls = function (value: CertPathControls, elGetter: $.ASN1Encoder<CertPathControls>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Name(value.taName, $.BER),
            /* IF_ABSENT  */ ((value.certificate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Certificate, $.BER)(value.certificate, $.BER)),
            /* IF_ABSENT  */ ((value.policySet === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CertificatePoliciesSyntax, $.BER)(value.policySet, $.BER)),
            /* IF_ABSENT  */ ((value.policyFlags === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CertPolicyFlags, $.BER)(value.policyFlags, $.BER)),
            /* IF_ABSENT  */ ((value.nameConstr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NameConstraintsSyntax, $.BER)(value.nameConstr, $.BER)),
            /* IF_ABSENT  */ ((value.pathLenConstraint === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.pathLenConstraint, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertPathControls(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertPathControls */

/* eslint-enable */

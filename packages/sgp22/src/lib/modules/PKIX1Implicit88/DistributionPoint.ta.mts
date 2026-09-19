/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DistributionPointName, _decode_DistributionPointName, _encode_DistributionPointName } from "../PKIX1Implicit88/DistributionPointName.ta.mjs";
// export { DistributionPointName, _decode_DistributionPointName, _encode_DistributionPointName } from "../PKIX1Implicit88/DistributionPointName.ta.mjs";
import { ReasonFlags, _decode_ReasonFlags, _encode_ReasonFlags } from "../PKIX1Implicit88/ReasonFlags.ta.mjs";
// export { ReasonFlags, ReasonFlags_unused /* IMPORTED_LONG_NAMED_BIT */, unused /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_keyCompromise /* IMPORTED_LONG_NAMED_BIT */, keyCompromise /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_cACompromise /* IMPORTED_LONG_NAMED_BIT */, cACompromise /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_affiliationChanged /* IMPORTED_LONG_NAMED_BIT */, affiliationChanged /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_superseded /* IMPORTED_LONG_NAMED_BIT */, superseded /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_cessationOfOperation /* IMPORTED_LONG_NAMED_BIT */, cessationOfOperation /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_certificateHold /* IMPORTED_LONG_NAMED_BIT */, certificateHold /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_privilegeWithdrawn /* IMPORTED_LONG_NAMED_BIT */, privilegeWithdrawn /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_aACompromise /* IMPORTED_LONG_NAMED_BIT */, aACompromise /* IMPORTED_SHORT_NAMED_BIT */, _decode_ReasonFlags, _encode_ReasonFlags } from "../PKIX1Implicit88/ReasonFlags.ta.mjs";
import { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../PKIX1Implicit88/GeneralNames.ta.mjs";
// export { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../PKIX1Implicit88/GeneralNames.ta.mjs";


/**
 * @summary DistributionPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DistributionPoint ::= SEQUENCE {
 *      distributionPoint       [0]     DistributionPointName OPTIONAL,
 *      reasons                 [1]     ReasonFlags OPTIONAL,
 *      cRLIssuer               [2]     GeneralNames OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DistributionPoint {
    constructor (
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>,
        /**
         * @summary `reasons`.
         * @public
         * @readonly
         */
        readonly reasons: OPTIONAL<ReasonFlags>,
        /**
         * @summary `cRLIssuer`.
         * @public
         * @readonly
         */
        readonly cRLIssuer: OPTIONAL<GeneralNames>
    ) {}

    /**
     * @summary Restructures an object into a DistributionPoint
     * @description
     * 
     * This takes an `object` and converts it to a `DistributionPoint`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DistributionPoint`.
     * @returns {DistributionPoint}
     */
    public static _from_object (_o: { [_K in keyof (DistributionPoint)]: (DistributionPoint)[_K] }): DistributionPoint {
        return new DistributionPoint(_o.distributionPoint, _o.reasons, _o.cRLIssuer);
    }


}

/**
 * @summary The Leading Root Component Types of DistributionPoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DistributionPoint: $.ComponentSpec[] = [
    new $.ComponentSpec("distributionPoint", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("reasons", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cRLIssuer", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DistributionPoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DistributionPoint: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DistributionPoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DistributionPoint: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DistributionPoint: $.ASN1Decoder<DistributionPoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DistributionPoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DistributionPoint (el: _Element): DistributionPoint {
    if (!_cached_decoder_for_DistributionPoint) { _cached_decoder_for_DistributionPoint = function (el: _Element): DistributionPoint {
    let distributionPoint: OPTIONAL<DistributionPointName>;
    let reasons: OPTIONAL<ReasonFlags>;
    let cRLIssuer: OPTIONAL<GeneralNames>;
    const callbacks: $.DecodingMap = {
        "distributionPoint": (_el: _Element): void => { distributionPoint = $._decode_explicit<DistributionPointName>(() => _decode_DistributionPointName)(_el); },
        "reasons": (_el: _Element): void => { reasons = $._decode_implicit<ReasonFlags>(() => _decode_ReasonFlags)(_el); },
        "cRLIssuer": (_el: _Element): void => { cRLIssuer = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DistributionPoint,
        _extension_additions_list_spec_for_DistributionPoint,
        _root_component_type_list_2_spec_for_DistributionPoint,
        undefined,
    );
    return new DistributionPoint(
        distributionPoint,
        reasons,
        cRLIssuer
    );
}; }
    return _cached_decoder_for_DistributionPoint(el);
}

let _cached_encoder_for_DistributionPoint: $.ASN1Encoder<DistributionPoint> | null = null;

/**
 * @summary Encodes a(n) DistributionPoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionPoint, encoded as an ASN.1 Element.
 */
export
function _encode_DistributionPoint (value: DistributionPoint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DistributionPoint) { _cached_encoder_for_DistributionPoint = function (value: DistributionPoint, elGetter: $.ASN1Encoder<DistributionPoint>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.distributionPoint === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_DistributionPointName, $.BER)(value.distributionPoint, $.BER)),
            /* IF_ABSENT  */ ((value.reasons === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ReasonFlags, $.BER)(value.reasons, $.BER)),
            /* IF_ABSENT  */ ((value.cRLIssuer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GeneralNames, $.BER)(value.cRLIssuer, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DistributionPoint(value, elGetter);
}


/* eslint-enable */

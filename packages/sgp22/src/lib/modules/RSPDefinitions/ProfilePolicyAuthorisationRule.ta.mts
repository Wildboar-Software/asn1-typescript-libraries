/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PprIds, _decode_PprIds, _encode_PprIds } from "../RSPDefinitions/PprIds.ta.mjs";
import { OperatorId, _decode_OperatorId, _encode_OperatorId } from "../RSPDefinitions/OperatorId.ta.mjs";
import { ProfilePolicyAuthorisationRule_pprFlags, _decode_ProfilePolicyAuthorisationRule_pprFlags, _encode_ProfilePolicyAuthorisationRule_pprFlags } from "../RSPDefinitions/ProfilePolicyAuthorisationRule-pprFlags.ta.mjs";


/**
 * @summary ProfilePolicyAuthorisationRule
 * @description
 * 
 * One row of the Rules Authorisation Table: which PPRs, which Profile Owners
 * may set them, and whether the End User must consent before installation.
 * During download the LPA walks these rules and cancels the session with
 * `pprNotAllowed` when the metadata is not allowed. SGP.22 v3.1 §2.9.2.1 and
 * §3.1.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfilePolicyAuthorisationRule ::= SEQUENCE {
 *     pprIds PprIds,
 *     allowedOperators SEQUENCE OF OperatorId,
 *     pprFlags BIT STRING {consentRequired(0)}
 * }
 * ```
 * 
 * @class
 */
export
class ProfilePolicyAuthorisationRule {
    constructor (
        /**
         * @summary `pprIds`.
         * @description
         * 
         * Which PPRs this rule authorises. One or more of PPR1 and PPR2.
         * `pprUpdateControl` is not a PPR. SGP.22 v3.1 §2.9.2.1.
         * 
         * @public
         * @readonly
         */
        readonly pprIds: PprIds,
        /**
         * @summary `allowedOperators`.
         * @description
         * 
         * Profile Owners allowed to use those PPRs. Compared with
         * `profileOwner`. Wildcards are defined in SGP.22 v3.1 §2.9.2.1.
         * 
         * @public
         * @readonly
         */
        readonly allowedOperators: OperatorId[],
        /**
         * @summary `pprFlags`.
         * @description
         * 
         * `consentRequired` forces the LPA to ask the End User before
         * installing a Profile that uses these PPRs. SGP.22 v3.1 §2.9.2.1.
         * 
         * @public
         * @readonly
         */
        readonly pprFlags: ProfilePolicyAuthorisationRule_pprFlags
    ) {}

    /**
     * @summary Restructures an object into a ProfilePolicyAuthorisationRule
     * @description
     * 
     * This takes an `object` and converts it to a `ProfilePolicyAuthorisationRule`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfilePolicyAuthorisationRule`.
     * @returns {ProfilePolicyAuthorisationRule}
     */
    public static _from_object (_o: { [_K in keyof (ProfilePolicyAuthorisationRule)]: (ProfilePolicyAuthorisationRule)[_K] }): ProfilePolicyAuthorisationRule {
        return new ProfilePolicyAuthorisationRule(_o.pprIds, _o.allowedOperators, _o.pprFlags);
    }


}

/**
 * @summary The Leading Root Component Types of ProfilePolicyAuthorisationRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfilePolicyAuthorisationRule: $.ComponentSpec[] = [
    new $.ComponentSpec("pprIds", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("allowedOperators", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pprFlags", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ProfilePolicyAuthorisationRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfilePolicyAuthorisationRule: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfilePolicyAuthorisationRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfilePolicyAuthorisationRule: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfilePolicyAuthorisationRule: $.ASN1Decoder<ProfilePolicyAuthorisationRule> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfilePolicyAuthorisationRule
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfilePolicyAuthorisationRule (el: _Element): ProfilePolicyAuthorisationRule {
    if (!_cached_decoder_for_ProfilePolicyAuthorisationRule) { _cached_decoder_for_ProfilePolicyAuthorisationRule = function (el: _Element): ProfilePolicyAuthorisationRule {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ProfilePolicyAuthorisationRule contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pprIds";
    sequence[1].name = "allowedOperators";
    sequence[2].name = "pprFlags";
    let pprIds!: PprIds;
    let allowedOperators!: OperatorId[];
    let pprFlags!: ProfilePolicyAuthorisationRule_pprFlags;
    pprIds = _decode_PprIds(sequence[0]);
    allowedOperators = $._decodeSequenceOf<OperatorId>(() => _decode_OperatorId)(sequence[1]);
    pprFlags = _decode_ProfilePolicyAuthorisationRule_pprFlags(sequence[2]);
    return new ProfilePolicyAuthorisationRule(
        pprIds,
        allowedOperators,
        pprFlags,

    );
}; }
    return _cached_decoder_for_ProfilePolicyAuthorisationRule(el);
}

let _cached_encoder_for_ProfilePolicyAuthorisationRule: $.ASN1Encoder<ProfilePolicyAuthorisationRule> | null = null;

/**
 * @summary Encodes a(n) ProfilePolicyAuthorisationRule into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfilePolicyAuthorisationRule, encoded as an ASN.1 Element.
 */
export
function _encode_ProfilePolicyAuthorisationRule (value: ProfilePolicyAuthorisationRule, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfilePolicyAuthorisationRule) { _cached_encoder_for_ProfilePolicyAuthorisationRule = function (value: ProfilePolicyAuthorisationRule): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PprIds(value.pprIds, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<OperatorId>(() => _encode_OperatorId, $.BER)(value.allowedOperators, $.BER),
            /* REQUIRED   */ _encode_ProfilePolicyAuthorisationRule_pprFlags(value.pprFlags, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProfilePolicyAuthorisationRule(value, elGetter);
}


/* eslint-enable */

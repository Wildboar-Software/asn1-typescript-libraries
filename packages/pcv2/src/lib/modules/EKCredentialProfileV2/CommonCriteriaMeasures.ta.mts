/* eslint-disable */
import {
    ASN1SizeError,
    type BOOLEAN,
    type IA5String,
    type OBJECT_IDENTIFIER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { strmax } from "../EKCredentialProfileV2/strmax.va.mjs";
import { EvaluationAssuranceLevel, _decode_EvaluationAssuranceLevel, _encode_EvaluationAssuranceLevel, _enum_for_EvaluationAssuranceLevel } from "../EKCredentialProfileV2/EvaluationAssuranceLevel.ta.mjs";
import { EvaluationStatus, _decode_EvaluationStatus, _encode_EvaluationStatus, _enum_for_EvaluationStatus } from "../EKCredentialProfileV2/EvaluationStatus.ta.mjs";
import { StrengthOfFunction, _decode_StrengthOfFunction, _encode_StrengthOfFunction, _enum_for_StrengthOfFunction } from "../EKCredentialProfileV2/StrengthOfFunction.ta.mjs";
import { URIReference, _decode_URIReference, _encode_URIReference } from "../EKCredentialProfileV2/URIReference.ta.mjs";


/**
 * @summary CommonCriteriaMeasures
 * @description
 *
 * Common Criteria evaluation asserted for the TPM. The protection profile and
 * the security target may each be named by an object identifier, by a
 * `URIReference`, or by both. When both are present for the same item, they are
 * consistent values. The platform certificate profile reuses this structure
 * inside `CommonCriteriaEvaluation`.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonCriteriaMeasures ::= SEQUENCE {
 *     -- // FIXME: IA5String, not IA5STRING
 *     version                 IA5String (SIZE (1..strmax)), -- “2.2” or “3.1”; future syntax defined by CC
 *     assurancelevel          EvaluationAssuranceLevel,
 *     evaluationStatus        EvaluationStatus, -- // FIXME: Typo: "EvalutionStatus"
 *     plus                    BOOLEAN DEFAULT FALSE,
 *     strengthOfFunction      [0] IMPLICIT StrengthOfFunction OPTIONAL,
 *     profileOid              [1] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     profileUri              [2] IMPLICIT URIReference OPTIONAL,
 *     targetOid               [3] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     targetUri               [4] IMPLICIT URIReference OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CommonCriteriaMeasures {
    /**
     * @summary `version`.
     * @description
     *
     * Common Criteria version whose syntax this value uses. The profile's
     * examples are "2.2" and "3.1". Later syntax is defined by Common Criteria,
     * not by this profile.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     *
     * @public
     * @readonly
     */
    readonly version: IA5String;
    /**
     * @summary `assurancelevel`.
     * @description
     *
     * Evaluation assurance level claimed for the TPM.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     *
     * @public
     * @readonly
     */
    readonly assurancelevel: EvaluationAssuranceLevel;
    /**
     * @summary `evaluationStatus`.
     * @description
     *
     * Whether the evaluation is a design claim, in progress, or complete.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     *
     * @public
     * @readonly
     */
    readonly evaluationStatus: EvaluationStatus;
    /**
     * @summary `plus`.
     * @description
     *
     * Boolean included with the evaluation. Defaults to false. The profile does
     * not define what true means.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     *
     * @public
     * @readonly
     */
    readonly plus: OPTIONAL<BOOLEAN>;
    /**
     * @summary `strengthOfFunction`.
     * @description
     *
     * Optional strength-of-function claim.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     *
     * @public
     * @readonly
     */
    readonly strengthOfFunction: OPTIONAL<StrengthOfFunction>;
    /**
     * @summary `profileOid`.
     * @description
     *
     * Object identifier of the protection profile. Consistent with `profileUri`
     * when both are present.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     *
     * @public
     * @readonly
     */
    readonly profileOid: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `profileUri`.
     * @description
     *
     * Document that describes the protection profile, pinned by a hash when a
     * hash is present. Consistent with `profileOid` when both are present.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     *
     * @public
     * @readonly
     */
    readonly profileUri: OPTIONAL<URIReference>;
    /**
     * @summary `targetOid`.
     * @description
     *
     * Object identifier of the security target. Consistent with `targetUri`
     * when both are present.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     *
     * @public
     * @readonly
     */
    readonly targetOid: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `targetUri`.
     * @description
     *
     * Document that describes the security target, pinned by a hash when a hash
     * is present. Consistent with `targetOid` when both are present.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     *
     * @public
     * @readonly
     */
    readonly targetUri: OPTIONAL<URIReference>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        version: IA5String,
        assurancelevel: EvaluationAssuranceLevel,
        evaluationStatus: EvaluationStatus,
        plus?: OPTIONAL<BOOLEAN>,
        strengthOfFunction?: OPTIONAL<StrengthOfFunction>,
        profileOid?: OPTIONAL<OBJECT_IDENTIFIER>,
        profileUri?: OPTIONAL<URIReference>,
        targetOid?: OPTIONAL<OBJECT_IDENTIFIER>,
        targetUri?: OPTIONAL<URIReference>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.version = version;
        if (version.length < 1 || version.length > strmax) {
            throw new ASN1SizeError("CommonCriteriaMeasures.version violates SIZE (1..strmax)");
        }
        this.assurancelevel = assurancelevel;
        this.evaluationStatus = evaluationStatus;
        this.plus = plus;
        this.strengthOfFunction = strengthOfFunction;
        this.profileOid = profileOid;
        this.profileUri = profileUri;
        this.targetOid = targetOid;
        this.targetUri = targetUri;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CommonCriteriaMeasures
     * @description
     * 
     * This takes an `object` and converts it to a `CommonCriteriaMeasures`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonCriteriaMeasures`.
     * @returns {CommonCriteriaMeasures}
     */
    public static _from_object (_o: { [_K in keyof (CommonCriteriaMeasures)]: (CommonCriteriaMeasures)[_K] }): CommonCriteriaMeasures {
        return new CommonCriteriaMeasures(_o.version, _o.assurancelevel, _o.evaluationStatus, _o.plus, _o.strengthOfFunction, _o.profileOid, _o.profileUri, _o.targetOid, _o.targetUri, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `plus`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_plus () { return false; }        /**
         * @summary The enum used as the type of the component `assurancelevel`
         * @public
         * @static
         */

    public static _enum_for_assurancelevel = _enum_for_EvaluationAssuranceLevel;        /**
         * @summary The enum used as the type of the component `evaluationStatus`
         * @public
         * @static
         */

    public static _enum_for_evaluationStatus = _enum_for_EvaluationStatus;        /**
         * @summary The enum used as the type of the component `strengthOfFunction`
         * @public
         * @static
         */

    public static _enum_for_strengthOfFunction = _enum_for_StrengthOfFunction;
}

/**
 * @summary The Leading Root Component Types of CommonCriteriaMeasures
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonCriteriaMeasures: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("assurancelevel", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("evaluationStatus", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("plus", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("strengthOfFunction", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("profileOid", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("profileUri", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("targetOid", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("targetUri", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CommonCriteriaMeasures
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonCriteriaMeasures: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonCriteriaMeasures
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonCriteriaMeasures: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonCriteriaMeasures: $.ASN1Decoder<CommonCriteriaMeasures> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonCriteriaMeasures
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonCriteriaMeasures (el: _Element): CommonCriteriaMeasures {
    if (!_cached_decoder_for_CommonCriteriaMeasures) { _cached_decoder_for_CommonCriteriaMeasures = function (el: _Element): CommonCriteriaMeasures {
    let version!: IA5String;
    let assurancelevel!: EvaluationAssuranceLevel;
    let evaluationStatus!: EvaluationStatus;
    let plus: OPTIONAL<BOOLEAN> = CommonCriteriaMeasures._default_value_for_plus;
    let strengthOfFunction: OPTIONAL<StrengthOfFunction>;
    let profileOid: OPTIONAL<OBJECT_IDENTIFIER>;
    let profileUri: OPTIONAL<URIReference>;
    let targetOid: OPTIONAL<OBJECT_IDENTIFIER>;
    let targetUri: OPTIONAL<URIReference>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decodeIA5String(_el); },
        "assurancelevel": (_el: _Element): void => { assurancelevel = _decode_EvaluationAssuranceLevel(_el); },
        "evaluationStatus": (_el: _Element): void => { evaluationStatus = _decode_EvaluationStatus(_el); },
        "plus": (_el: _Element): void => { plus = $._decodeBoolean(_el); },
        "strengthOfFunction": (_el: _Element): void => { strengthOfFunction = $._decode_implicit<StrengthOfFunction>(() => _decode_StrengthOfFunction)(_el); },
        "profileOid": (_el: _Element): void => { profileOid = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "profileUri": (_el: _Element): void => { profileUri = $._decode_implicit<URIReference>(() => _decode_URIReference)(_el); },
        "targetOid": (_el: _Element): void => { targetOid = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "targetUri": (_el: _Element): void => { targetUri = $._decode_implicit<URIReference>(() => _decode_URIReference)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonCriteriaMeasures,
        _extension_additions_list_spec_for_CommonCriteriaMeasures,
        _root_component_type_list_2_spec_for_CommonCriteriaMeasures,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonCriteriaMeasures(
        version,
        assurancelevel,
        evaluationStatus,
        plus,
        strengthOfFunction,
        profileOid,
        profileUri,
        targetOid,
        targetUri,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CommonCriteriaMeasures(el);
}

let _cached_encoder_for_CommonCriteriaMeasures: $.ASN1Encoder<CommonCriteriaMeasures> | null = null;

/**
 * @summary Encodes a(n) CommonCriteriaMeasures into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonCriteriaMeasures, encoded as an ASN.1 Element.
 */
export
function _encode_CommonCriteriaMeasures (value: CommonCriteriaMeasures, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonCriteriaMeasures) { _cached_encoder_for_CommonCriteriaMeasures = function (value: CommonCriteriaMeasures): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encodeIA5String(value.version, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_EvaluationAssuranceLevel(value.assurancelevel, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_EvaluationStatus(value.evaluationStatus, $.BER);
    if (value.plus !== undefined && !$.deepEq(value.plus, CommonCriteriaMeasures._default_value_for_plus)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encodeBoolean(value.plus, $.BER);
    }
    if (value.strengthOfFunction !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_StrengthOfFunction, $.BER)(value.strengthOfFunction, $.BER);
    }
    if (value.profileOid !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.profileOid, $.BER);
    }
    if (value.profileUri !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_URIReference, $.BER)(value.profileUri, $.BER);
    }
    if (value.targetOid !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeObjectIdentifier, $.BER)(value.targetOid, $.BER);
    }
    if (value.targetUri !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_URIReference, $.BER)(value.targetUri, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CommonCriteriaMeasures(value, elGetter);
}


/* eslint-enable */

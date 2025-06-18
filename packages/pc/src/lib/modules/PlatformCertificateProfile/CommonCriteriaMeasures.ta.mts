/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { EvaluationAssuranceLevel, _enum_for_EvaluationAssuranceLevel, _decode_EvaluationAssuranceLevel, _encode_EvaluationAssuranceLevel } from "../PlatformCertificateProfile/EvaluationAssuranceLevel.ta.mjs";
import { StrengthOfFunction, _enum_for_StrengthOfFunction, _decode_StrengthOfFunction, _encode_StrengthOfFunction } from "../PlatformCertificateProfile/StrengthOfFunction.ta.mjs";
import { URIReference, _decode_URIReference, _encode_URIReference } from "../PlatformCertificateProfile/URIReference.ta.mjs";
import {
    EvaluationStatus,
    _decode_EvaluationStatus,
    _encode_EvaluationStatus,
} from "./EvaluationStatus.ta.mjs";


/**
 * @summary CommonCriteriaMeasures
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonCriteriaMeasures ::= SEQUENCE {
 *     version             IA5String (SIZE (1..strmax)), -- “2.2” or “3.1”; future syntax defined by CC
 *     assurancelevel      EvaluationAssuranceLevel,
 *     evaluationStatus    EvalutionStatus,
 *     plus                BOOLEAN DEFAULT FALSE,
 *     strengthOfFunction  [0] IMPLICIT StrengthOfFunction OPTIONAL,
 *     profileOid          [1] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     profileUri          [2] IMPLICIT URIReference OPTIONAL,
 *     targetOid           [3] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     targetUri           [4] IMPLICIT URIReference OPTIONAL }
 * ```
 *
 * @class
 */
export
class CommonCriteriaMeasures {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: IA5String,
        /**
         * @summary `assurancelevel`.
         * @public
         * @readonly
         */
        readonly assurancelevel: EvaluationAssuranceLevel,
        /**
         * @summary `evaluationStatus`.
         * @public
         * @readonly
         */
        readonly evaluationStatus: EvaluationStatus,
        /**
         * @summary `plus`.
         * @public
         * @readonly
         */
        readonly plus: OPTIONAL<BOOLEAN>,
        /**
         * @summary `strengthOfFunction`.
         * @public
         * @readonly
         */
        readonly strengthOfFunction: OPTIONAL<StrengthOfFunction>,
        /**
         * @summary `profileOid`.
         * @public
         * @readonly
         */
        readonly profileOid: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `profileUri`.
         * @public
         * @readonly
         */
        readonly profileUri: OPTIONAL<URIReference>,
        /**
         * @summary `targetOid`.
         * @public
         * @readonly
         */
        readonly targetOid: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `targetUri`.
         * @public
         * @readonly
         */
        readonly targetUri: OPTIONAL<URIReference>
    ) {}

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
        return new CommonCriteriaMeasures(_o.version, _o.assurancelevel, _o.evaluationStatus, _o.plus, _o.strengthOfFunction, _o.profileOid, _o.profileUri, _o.targetOid, _o.targetUri);
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
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("assurancelevel", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    /* FIXME: evaluationStatus COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("plus", true, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("strengthOfFunction", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("profileOid", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("profileUri", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("targetOid", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("targetUri", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
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
 * @param {_Element} el The element being decoded.
 * @returns {CommonCriteriaMeasures} The decoded data structure.
 */
export
function _decode_CommonCriteriaMeasures (el: _Element) {
    if (!_cached_decoder_for_CommonCriteriaMeasures) { _cached_decoder_for_CommonCriteriaMeasures = function (el: _Element): CommonCriteriaMeasures {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: IA5String;
    let assurancelevel!: EvaluationAssuranceLevel;
    let evaluationStatus!: EvaluationStatus;
    let plus: OPTIONAL<BOOLEAN> = CommonCriteriaMeasures._default_value_for_plus;
    let strengthOfFunction: OPTIONAL<StrengthOfFunction>;
    let profileOid: OPTIONAL<OBJECT_IDENTIFIER>;
    let profileUri: OPTIONAL<URIReference>;
    let targetOid: OPTIONAL<OBJECT_IDENTIFIER>;
    let targetUri: OPTIONAL<URIReference>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
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
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonCriteriaMeasures,
        _extension_additions_list_spec_for_CommonCriteriaMeasures,
        _root_component_type_list_2_spec_for_CommonCriteriaMeasures,
        undefined,
    );
    return new CommonCriteriaMeasures( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        assurancelevel,
        evaluationStatus,
        plus,
        strengthOfFunction,
        profileOid,
        profileUri,
        targetOid,
        targetUri
    );
}; }
    return _cached_decoder_for_CommonCriteriaMeasures(el);
}

let _cached_encoder_for_CommonCriteriaMeasures: $.ASN1Encoder<CommonCriteriaMeasures> | null = null;

/**
 * @summary Encodes a(n) CommonCriteriaMeasures into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonCriteriaMeasures, encoded as an ASN.1 Element.
 */
export
function _encode_CommonCriteriaMeasures (value: CommonCriteriaMeasures, elGetter: $.ASN1Encoder<CommonCriteriaMeasures>) {
    if (!_cached_encoder_for_CommonCriteriaMeasures) { _cached_encoder_for_CommonCriteriaMeasures = function (value: CommonCriteriaMeasures): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeIA5String(value.version, $.DER),
            /* REQUIRED   */ _encode_EvaluationAssuranceLevel(value.assurancelevel, $.DER),
            /* REQUIRED   */ _encode_EvaluationStatus(value.evaluationStatus, $.DER),
            /* IF_DEFAULT */ (value.plus === undefined || $.deepEq(value.plus, CommonCriteriaMeasures._default_value_for_plus) ? undefined : $._encodeBoolean(value.plus, $.DER)),
            /* IF_ABSENT  */ ((value.strengthOfFunction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_StrengthOfFunction, $.DER)(value.strengthOfFunction, $.DER)),
            /* IF_ABSENT  */ ((value.profileOid === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.DER)(value.profileOid, $.DER)),
            /* IF_ABSENT  */ ((value.profileUri === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_URIReference, $.DER)(value.profileUri, $.DER)),
            /* IF_ABSENT  */ ((value.targetOid === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeObjectIdentifier, $.DER)(value.targetOid, $.DER)),
            /* IF_ABSENT  */ ((value.targetUri === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_URIReference, $.DER)(value.targetUri, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_CommonCriteriaMeasures(value, elGetter);
}


/* eslint-enable */

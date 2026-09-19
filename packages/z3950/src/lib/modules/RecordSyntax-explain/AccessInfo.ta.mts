/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { QueryTypeDetails, _decode_QueryTypeDetails, _encode_QueryTypeDetails } from "../RecordSyntax-explain/QueryTypeDetails.ta.mjs";
// export { QueryTypeDetails, _decode_QueryTypeDetails, _encode_QueryTypeDetails } from "../RecordSyntax-explain/QueryTypeDetails.ta.mjs";
import { AccessRestrictions, _decode_AccessRestrictions, _encode_AccessRestrictions } from "../RecordSyntax-explain/AccessRestrictions.ta.mjs";
// export { AccessRestrictions, _decode_AccessRestrictions, _encode_AccessRestrictions } from "../RecordSyntax-explain/AccessRestrictions.ta.mjs";
import { Costs, _decode_Costs, _encode_Costs } from "../RecordSyntax-explain/Costs.ta.mjs";
// export { Costs, _decode_Costs, _encode_Costs } from "../RecordSyntax-explain/Costs.ta.mjs";


/**
 * @summary AccessInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessInfo ::= SEQUENCE {
 *       -- AccessInfo contains the fundmental information about what facilites
 *       -- are required to use this target or server. For example, if an origin
 *       -- can handle none of the record syntaxes a database can provide, 
 *       -- it might choose not to access the database.
 *   queryTypesSupported     [0] IMPLICIT SEQUENCE OF QueryTypeDetails OPTIONAL,
 *   diagnosticsSets         [1] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL,
 *   attributeSetIds         [2] IMPLICIT SEQUENCE OF AttributeSetId OPTIONAL,
 *   schemas                 [3] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL,
 *   recordSyntaxes          [4] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL,
 *   resourceChallenges      [5] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL,
 *   restrictedAccess        [6] IMPLICIT AccessRestrictions OPTIONAL,
 *   costInfo                [8] IMPLICIT Costs OPTIONAL,
 *   variantSets             [9] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL,
 *   elementSetNames         [10] IMPLICIT SEQUENCE OF ElementSetName OPTIONAL,
 *   unitSystems             [11] IMPLICIT SEQUENCE OF InternationalString}
 * ```
 * 
 * @class
 */
export
class AccessInfo {
    constructor (
        /**
         * @summary `queryTypesSupported`.
         * @public
         * @readonly
         */
        readonly queryTypesSupported: OPTIONAL<QueryTypeDetails[]>,
        /**
         * @summary `diagnosticsSets`.
         * @public
         * @readonly
         */
        readonly diagnosticsSets: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `attributeSetIds`.
         * @public
         * @readonly
         */
        readonly attributeSetIds: OPTIONAL<AttributeSetId[]>,
        /**
         * @summary `schemas`.
         * @public
         * @readonly
         */
        readonly schemas: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `recordSyntaxes`.
         * @public
         * @readonly
         */
        readonly recordSyntaxes: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `resourceChallenges`.
         * @public
         * @readonly
         */
        readonly resourceChallenges: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `restrictedAccess`.
         * @public
         * @readonly
         */
        readonly restrictedAccess: OPTIONAL<AccessRestrictions>,
        /**
         * @summary `costInfo`.
         * @public
         * @readonly
         */
        readonly costInfo: OPTIONAL<Costs>,
        /**
         * @summary `variantSets`.
         * @public
         * @readonly
         */
        readonly variantSets: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `elementSetNames`.
         * @public
         * @readonly
         */
        readonly elementSetNames: OPTIONAL<ElementSetName[]>,
        /**
         * @summary `unitSystems`.
         * @public
         * @readonly
         */
        readonly unitSystems: InternationalString[]
    ) {}

    /**
     * @summary Restructures an object into a AccessInfo
     * @description
     * 
     * This takes an `object` and converts it to a `AccessInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessInfo`.
     * @returns {AccessInfo}
     */
    public static _from_object (_o: { [_K in keyof (AccessInfo)]: (AccessInfo)[_K] }): AccessInfo {
        return new AccessInfo(_o.queryTypesSupported, _o.diagnosticsSets, _o.attributeSetIds, _o.schemas, _o.recordSyntaxes, _o.resourceChallenges, _o.restrictedAccess, _o.costInfo, _o.variantSets, _o.elementSetNames, _o.unitSystems);
    }


}

/**
 * @summary The Leading Root Component Types of AccessInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("queryTypesSupported", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("diagnosticsSets", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("attributeSetIds", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("schemas", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recordSyntaxes", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("resourceChallenges", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("restrictedAccess", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("costInfo", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("variantSets", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("elementSetNames", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("unitSystems", false, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of AccessInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessInfo: $.ASN1Decoder<AccessInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessInfo (el: _Element): AccessInfo {
    if (!_cached_decoder_for_AccessInfo) { _cached_decoder_for_AccessInfo = function (el: _Element): AccessInfo {
    let queryTypesSupported: OPTIONAL<QueryTypeDetails[]>;
    let diagnosticsSets: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let attributeSetIds: OPTIONAL<AttributeSetId[]>;
    let schemas: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let recordSyntaxes: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let resourceChallenges: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let restrictedAccess: OPTIONAL<AccessRestrictions>;
    let costInfo: OPTIONAL<Costs>;
    let variantSets: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let elementSetNames: OPTIONAL<ElementSetName[]>;
    let unitSystems!: InternationalString[];
    const callbacks: $.DecodingMap = {
        "queryTypesSupported": (_el: _Element): void => { queryTypesSupported = $._decode_implicit<QueryTypeDetails[]>(() => $._decodeSequenceOf<QueryTypeDetails>(() => _decode_QueryTypeDetails))(_el); },
        "diagnosticsSets": (_el: _Element): void => { diagnosticsSets = $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); },
        "attributeSetIds": (_el: _Element): void => { attributeSetIds = $._decode_implicit<AttributeSetId[]>(() => $._decodeSequenceOf<AttributeSetId>(() => _decode_AttributeSetId))(_el); },
        "schemas": (_el: _Element): void => { schemas = $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); },
        "recordSyntaxes": (_el: _Element): void => { recordSyntaxes = $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); },
        "resourceChallenges": (_el: _Element): void => { resourceChallenges = $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); },
        "restrictedAccess": (_el: _Element): void => { restrictedAccess = $._decode_implicit<AccessRestrictions>(() => _decode_AccessRestrictions)(_el); },
        "costInfo": (_el: _Element): void => { costInfo = $._decode_implicit<Costs>(() => _decode_Costs)(_el); },
        "variantSets": (_el: _Element): void => { variantSets = $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); },
        "elementSetNames": (_el: _Element): void => { elementSetNames = $._decode_implicit<ElementSetName[]>(() => $._decodeSequenceOf<ElementSetName>(() => _decode_ElementSetName))(_el); },
        "unitSystems": (_el: _Element): void => { unitSystems = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AccessInfo,
        _extension_additions_list_spec_for_AccessInfo,
        _root_component_type_list_2_spec_for_AccessInfo,
        undefined,
    );
    return new AccessInfo(
        queryTypesSupported,
        diagnosticsSets,
        attributeSetIds,
        schemas,
        recordSyntaxes,
        resourceChallenges,
        restrictedAccess,
        costInfo,
        variantSets,
        elementSetNames,
        unitSystems
    );
}; }
    return _cached_decoder_for_AccessInfo(el);
}

let _cached_encoder_for_AccessInfo: $.ASN1Encoder<AccessInfo> | null = null;

/**
 * @summary Encodes a(n) AccessInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AccessInfo (value: AccessInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessInfo) { _cached_encoder_for_AccessInfo = function (value: AccessInfo, elGetter: $.ASN1Encoder<AccessInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.queryTypesSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<QueryTypeDetails>(() => _encode_QueryTypeDetails, $.BER), $.BER)(value.queryTypesSupported, $.BER)),
            /* IF_ABSENT  */ ((value.diagnosticsSets === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.diagnosticsSets, $.BER)),
            /* IF_ABSENT  */ ((value.attributeSetIds === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<AttributeSetId>(() => _encode_AttributeSetId, $.BER), $.BER)(value.attributeSetIds, $.BER)),
            /* IF_ABSENT  */ ((value.schemas === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.schemas, $.BER)),
            /* IF_ABSENT  */ ((value.recordSyntaxes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.recordSyntaxes, $.BER)),
            /* IF_ABSENT  */ ((value.resourceChallenges === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.resourceChallenges, $.BER)),
            /* IF_ABSENT  */ ((value.restrictedAccess === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_AccessRestrictions, $.BER)(value.restrictedAccess, $.BER)),
            /* IF_ABSENT  */ ((value.costInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Costs, $.BER)(value.costInfo, $.BER)),
            /* IF_ABSENT  */ ((value.variantSets === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.variantSets, $.BER)),
            /* IF_ABSENT  */ ((value.elementSetNames === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<ElementSetName>(() => _encode_ElementSetName, $.BER), $.BER)(value.elementSetNames, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.unitSystems, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AccessInfo(value, elGetter);
}


/* eslint-enable */

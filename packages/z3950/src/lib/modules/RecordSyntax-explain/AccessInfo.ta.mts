/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { QueryTypeDetails, _decode_QueryTypeDetails, _encode_QueryTypeDetails } from "../RecordSyntax-explain/QueryTypeDetails.ta.mjs";
import { AttributeSetId, _decode_AttributeSetId, _encode_AttributeSetId } from "../Z39-50-APDU-2001/AttributeSetId.ta.mjs";
import { AccessRestrictions, _decode_AccessRestrictions, _encode_AccessRestrictions } from "../RecordSyntax-explain/AccessRestrictions.ta.mjs";
import { Costs, _decode_Costs, _encode_Costs } from "../RecordSyntax-explain/Costs.ta.mjs";
import { ElementSetName, _decode_ElementSetName, _encode_ElementSetName } from "../Z39-50-APDU-2001/ElementSetName.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary AccessInfo
 * @description
 * 
 * Facilities required to use the server, or one database. If a client can
 * handle none of the record syntaxes a database can provide, it might choose
 * not to access that database. On the server record, each listed object is
 * supported for one or more databases; retrieve that database's record to see
 * which. Every object listed for a database should also appear on the server's
 * AccessInfo. REC.1 Comment 13; ANSI/NISO Z39.50-2003 §3.2.10.3.1, §3.2.10.3.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessInfo ::= SEQUENCE {
 *     -- see comment 13
 *     queryTypesSupported [0] IMPLICIT SEQUENCE OF QueryTypeDetails OPTIONAL,
 *     diagnosticsSets     [1] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL,
 *     attributeSetIds     [2] IMPLICIT SEQUENCE OF AttributeSetId OPTIONAL,
 *     schemas             [3] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL,
 *     recordSyntaxes      [4] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL,
 *     resourceChallenges  [5] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL,
 *     restrictedAccess    [6] IMPLICIT AccessRestrictions OPTIONAL,
 *     costInfo            [8] IMPLICIT Costs OPTIONAL,
 *     variantSets         [9] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL,
 *     elementSetNames     [10] IMPLICIT SEQUENCE OF ElementSetName OPTIONAL,
 *     unitSystems         [11] IMPLICIT SEQUENCE OF InternationalString
 * }
 * ```
 * 
 * @class
 */
export
class AccessInfo {
    /**
     * @summary `queryTypesSupported`.
     * @description
     * Query types supported, with details for each. Type-2 is the ISO 8777
     * query. ANSI/NISO Z39.50-2003 §3.2.10.3.1, §3.2.2.1.1.
     * @public
     * @readonly
     */
    readonly queryTypesSupported: OPTIONAL<QueryTypeDetails[]>;
    /**
     * @summary `diagnosticsSets`.
     * @description
     * Diagnostic sets supported. ANSI/NISO Z39.50-2003 §3.2.10.3.1.
     * @public
     * @readonly
     */
    readonly diagnosticsSets: OPTIONAL<OBJECT_IDENTIFIER[]>;
    /**
     * @summary `attributeSetIds`.
     * @description
     * Attribute sets supported. ANSI/NISO Z39.50-2003 §3.2.10.3.1.
     * @public
     * @readonly
     */
    readonly attributeSetIds: OPTIONAL<AttributeSetId[]>;
    /**
     * @summary `schemas`.
     * @description
     * Schemas supported. ANSI/NISO Z39.50-2003 §3.2.10.3.1.
     * @public
     * @readonly
     */
    readonly schemas: OPTIONAL<OBJECT_IDENTIFIER[]>;
    /**
     * @summary `recordSyntaxes`.
     * @description
     * Record syntaxes supported. ANSI/NISO Z39.50-2003 §3.2.10.3.1.
     * @public
     * @readonly
     */
    readonly recordSyntaxes: OPTIONAL<OBJECT_IDENTIFIER[]>;
    /**
     * @summary `resourceChallenges`.
     * @description
     * Resource challenges supported. ANSI/NISO Z39.50-2003 §3.2.10.3.1.
     * @public
     * @readonly
     */
    readonly resourceChallenges: OPTIONAL<OBJECT_IDENTIFIER[]>;
    /**
     * @summary `restrictedAccess`.
     * @description
     * Access restrictions, including human-readable access-control text and
     * access-challenge object identifiers. ANSI/NISO Z39.50-2003 §3.2.10.3.1,
     * §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly restrictedAccess: OPTIONAL<AccessRestrictions>;
    /**
     * @summary `costInfo`.
     * @description
     * Cost information for connect, present, and search, in machine-readable
     * form and in human-readable text. ANSI/NISO Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly costInfo: OPTIONAL<Costs>;
    /**
     * @summary `variantSets`.
     * @description
     * Variant sets supported. ANSI/NISO Z39.50-2003 §3.2.10.3.1.
     * @public
     * @readonly
     */
    readonly variantSets: OPTIONAL<OBJECT_IDENTIFIER[]>;
    /**
     * @summary `elementSetNames`.
     * @description
     * Element set names supported. ANSI/NISO Z39.50-2003 §3.2.10.3.1.
     * @public
     * @readonly
     */
    readonly elementSetNames: OPTIONAL<ElementSetName[]>;
    /**
     * @summary `unitSystems`.
     * @description
     * Unit systems supported. ANSI/NISO Z39.50-2003 §3.2.10.3.1.
     * @public
     * @readonly
     */
    readonly unitSystems: InternationalString[];

    constructor (
        queryTypesSupported: OPTIONAL<QueryTypeDetails[]>,
        diagnosticsSets: OPTIONAL<OBJECT_IDENTIFIER[]>,
        attributeSetIds: OPTIONAL<AttributeSetId[]>,
        schemas: OPTIONAL<OBJECT_IDENTIFIER[]>,
        recordSyntaxes: OPTIONAL<OBJECT_IDENTIFIER[]>,
        resourceChallenges: OPTIONAL<OBJECT_IDENTIFIER[]>,
        restrictedAccess: OPTIONAL<AccessRestrictions>,
        costInfo: OPTIONAL<Costs>,
        variantSets: OPTIONAL<OBJECT_IDENTIFIER[]>,
        elementSetNames: OPTIONAL<ElementSetName[]>,
        unitSystems: InternationalString[]
    ) {
        this.queryTypesSupported = queryTypesSupported;
        this.diagnosticsSets = diagnosticsSets;
        this.attributeSetIds = attributeSetIds;
        this.schemas = schemas;
        this.recordSyntaxes = recordSyntaxes;
        this.resourceChallenges = resourceChallenges;
        this.restrictedAccess = restrictedAccess;
        this.costInfo = costInfo;
        this.variantSets = variantSets;
        this.elementSetNames = elementSetNames;
        this.unitSystems = unitSystems;
    }

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
    const _components: _Element[] = new Array(11);
    let _components_i = 0;
    if (value.queryTypesSupported !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<QueryTypeDetails>(() => _encode_QueryTypeDetails, $.BER), $.BER)(value.queryTypesSupported, $.BER);
    }
    if (value.diagnosticsSets !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.diagnosticsSets, $.BER);
    }
    if (value.attributeSetIds !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<AttributeSetId>(() => _encode_AttributeSetId, $.BER), $.BER)(value.attributeSetIds, $.BER);
    }
    if (value.schemas !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.schemas, $.BER);
    }
    if (value.recordSyntaxes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.recordSyntaxes, $.BER);
    }
    if (value.resourceChallenges !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.resourceChallenges, $.BER);
    }
    if (value.restrictedAccess !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_AccessRestrictions, $.BER)(value.restrictedAccess, $.BER);
    }
    if (value.costInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Costs, $.BER)(value.costInfo, $.BER);
    }
    if (value.variantSets !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.variantSets, $.BER);
    }
    if (value.elementSetNames !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<ElementSetName>(() => _encode_ElementSetName, $.BER), $.BER)(value.elementSetNames, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.unitSystems, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AccessInfo(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Specification, _decode_Specification, _encode_Specification } from "../Z39-50-APDU-2001/Specification.ta.mjs";
import { CompSpec_dbSpecific_Item, _decode_CompSpec_dbSpecific_Item, _encode_CompSpec_dbSpecific_Item } from "../Z39-50-APDU-2001/CompSpec-dbSpecific-Item.ta.mjs";


/**
 * @summary CompSpec
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompSpec ::= SEQUENCE {
 *     selectAlternativeSyntax [1] IMPLICIT BOOLEAN,
 *     --See comment for recordSyntax, below
 *     generic                 [2] IMPLICIT Specification OPTIONAL,
 *     dbSpecific              [3] IMPLICIT SEQUENCE OF SEQUENCE {
 *         db      [1] DatabaseName,
 *         spec    [2] IMPLICIT Specification
 *     } OPTIONAL,
 *     -- At least one of generic and dbSpecific must occur,
 *     -- and both may occur. If both, then for any record no
 *     -- in the list of databases within dbSpecific, generic applies
 *     recordSyntax            [4] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL
 *     -- For each record, the server selects the first record syntax in
 *     -- this list that it can support. If the list is exhausted, the server
 *     -- may select an alternative syntax if selectAlternativeSyntax is 'true'.
 * }
 * ```
 * 
 * @class
 */
export
class CompSpec {
    /**
     * @summary `selectAlternativeSyntax`.
     * @public
     * @readonly
     */
    readonly selectAlternativeSyntax: BOOLEAN;
    /**
     * @summary `generic`.
     * @public
     * @readonly
     */
    readonly generic: OPTIONAL<Specification>;
    /**
     * @summary `dbSpecific`.
     * @public
     * @readonly
     */
    readonly dbSpecific: OPTIONAL<CompSpec_dbSpecific_Item[]>;
    /**
     * @summary `recordSyntax`.
     * @public
     * @readonly
     */
    readonly recordSyntax: OPTIONAL<OBJECT_IDENTIFIER[]>;

    constructor (
        selectAlternativeSyntax: BOOLEAN,
        generic: OPTIONAL<Specification>,
        dbSpecific: OPTIONAL<CompSpec_dbSpecific_Item[]>,
        recordSyntax: OPTIONAL<OBJECT_IDENTIFIER[]>
    ) {
        this.selectAlternativeSyntax = selectAlternativeSyntax;
        this.generic = generic;
        this.dbSpecific = dbSpecific;
        this.recordSyntax = recordSyntax;
    }

    /**
     * @summary Restructures an object into a CompSpec
     * @description
     * 
     * This takes an `object` and converts it to a `CompSpec`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompSpec`.
     * @returns {CompSpec}
     */
    public static _from_object (_o: { [_K in keyof (CompSpec)]: (CompSpec)[_K] }): CompSpec {
        return new CompSpec(_o.selectAlternativeSyntax, _o.generic, _o.dbSpecific, _o.recordSyntax);
    }


}

/**
 * @summary The Leading Root Component Types of CompSpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompSpec: $.ComponentSpec[] = [
    new $.ComponentSpec("selectAlternativeSyntax", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("generic", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dbSpecific", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recordSyntax", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CompSpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompSpec: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompSpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompSpec: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompSpec: $.ASN1Decoder<CompSpec> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompSpec
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompSpec (el: _Element): CompSpec {
    if (!_cached_decoder_for_CompSpec) { _cached_decoder_for_CompSpec = function (el: _Element): CompSpec {
    let selectAlternativeSyntax!: BOOLEAN;
    let generic: OPTIONAL<Specification>;
    let dbSpecific: OPTIONAL<CompSpec_dbSpecific_Item[]>;
    let recordSyntax: OPTIONAL<OBJECT_IDENTIFIER[]>;
    const callbacks: $.DecodingMap = {
        "selectAlternativeSyntax": (_el: _Element): void => { selectAlternativeSyntax = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "generic": (_el: _Element): void => { generic = $._decode_implicit<Specification>(() => _decode_Specification)(_el); },
        "dbSpecific": (_el: _Element): void => { dbSpecific = $._decode_implicit<CompSpec_dbSpecific_Item[]>(() => $._decodeSequenceOf<CompSpec_dbSpecific_Item>(() => _decode_CompSpec_dbSpecific_Item))(_el); },
        "recordSyntax": (_el: _Element): void => { recordSyntax = $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompSpec,
        _extension_additions_list_spec_for_CompSpec,
        _root_component_type_list_2_spec_for_CompSpec,
        undefined,
    );
    return new CompSpec(
        selectAlternativeSyntax,
        generic,
        dbSpecific,
        recordSyntax
    );
}; }
    return _cached_decoder_for_CompSpec(el);
}

let _cached_encoder_for_CompSpec: $.ASN1Encoder<CompSpec> | null = null;

/**
 * @summary Encodes a(n) CompSpec into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompSpec, encoded as an ASN.1 Element.
 */
export
function _encode_CompSpec (value: CompSpec, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompSpec) { _cached_encoder_for_CompSpec = function (value: CompSpec, elGetter: $.ASN1Encoder<CompSpec>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.selectAlternativeSyntax, $.BER);
    if (value.generic !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Specification, $.BER)(value.generic, $.BER);
    }
    if (value.dbSpecific !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<CompSpec_dbSpecific_Item>(() => _encode_CompSpec_dbSpecific_Item, $.BER), $.BER)(value.dbSpecific, $.BER);
    }
    if (value.recordSyntax !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.recordSyntax, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CompSpec(value, elGetter);
}


/* eslint-enable */

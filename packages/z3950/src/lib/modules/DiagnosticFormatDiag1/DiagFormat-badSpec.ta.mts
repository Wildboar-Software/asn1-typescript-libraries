/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Specification, _decode_Specification, _encode_Specification } from "../Z39-50-APDU-2001/Specification.ta.mjs";
// export { Specification, _decode_Specification, _encode_Specification } from "../Z39-50-APDU-2001/Specification.ta.mjs";
import { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
// export { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";


/**
 * @summary DiagFormat_badSpec
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-badSpec ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DiagFormat_badSpec {
    /**
     * @summary `spec`.
     * @public
     * @readonly
     */
    readonly spec: Specification;
    /**
     * @summary `db`.
     * @public
     * @readonly
     */
    readonly db: OPTIONAL<DatabaseName>;
    /**
     * @summary `goodOnes`.
     * @public
     * @readonly
     */
    readonly goodOnes: OPTIONAL<Specification[]>;

    constructor (
        spec: Specification,
        db: OPTIONAL<DatabaseName>,
        goodOnes: OPTIONAL<Specification[]>
    ) {
        this.spec = spec;
        this.db = db;
        this.goodOnes = goodOnes;
    }

    /**
     * @summary Restructures an object into a DiagFormat_badSpec
     * @description
     * 
     * This takes an `object` and converts it to a `DiagFormat_badSpec`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DiagFormat_badSpec`.
     * @returns {DiagFormat_badSpec}
     */
    public static _from_object (_o: { [_K in keyof (DiagFormat_badSpec)]: (DiagFormat_badSpec)[_K] }): DiagFormat_badSpec {
        return new DiagFormat_badSpec(_o.spec, _o.db, _o.goodOnes);
    }


}

/**
 * @summary The Leading Root Component Types of DiagFormat_badSpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DiagFormat_badSpec: $.ComponentSpec[] = [
    new $.ComponentSpec("spec", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("db", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("goodOnes", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of DiagFormat_badSpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DiagFormat_badSpec: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DiagFormat_badSpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DiagFormat_badSpec: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DiagFormat_badSpec: $.ASN1Decoder<DiagFormat_badSpec> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_badSpec
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_badSpec (el: _Element): DiagFormat_badSpec {
    if (!_cached_decoder_for_DiagFormat_badSpec) { _cached_decoder_for_DiagFormat_badSpec = function (el: _Element): DiagFormat_badSpec {
    let spec!: Specification;
    let db: OPTIONAL<DatabaseName>;
    let goodOnes: OPTIONAL<Specification[]>;
    const callbacks: $.DecodingMap = {
        "spec": (_el: _Element): void => { spec = $._decode_implicit<Specification>(() => _decode_Specification)(_el); },
        "db": (_el: _Element): void => { db = $._decode_implicit<DatabaseName>(() => _decode_DatabaseName)(_el); },
        "goodOnes": (_el: _Element): void => { goodOnes = $._decode_implicit<Specification[]>(() => $._decodeSequenceOf<Specification>(() => _decode_Specification))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DiagFormat_badSpec,
        _extension_additions_list_spec_for_DiagFormat_badSpec,
        _root_component_type_list_2_spec_for_DiagFormat_badSpec,
        undefined,
    );
    return new DiagFormat_badSpec(
        spec,
        db,
        goodOnes
    );
}; }
    return _cached_decoder_for_DiagFormat_badSpec(el);
}

let _cached_encoder_for_DiagFormat_badSpec: $.ASN1Encoder<DiagFormat_badSpec> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_badSpec into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_badSpec, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_badSpec (value: DiagFormat_badSpec, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_badSpec) { _cached_encoder_for_DiagFormat_badSpec = function (value: DiagFormat_badSpec, elGetter: $.ASN1Encoder<DiagFormat_badSpec>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Specification, $.BER)(value.spec, $.BER);
    if (value.db !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_DatabaseName, $.BER)(value.db, $.BER);
    }
    if (value.goodOnes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<Specification>(() => _encode_Specification, $.BER), $.BER)(value.goodOnes, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DiagFormat_badSpec(value, elGetter);
}


/* eslint-enable */

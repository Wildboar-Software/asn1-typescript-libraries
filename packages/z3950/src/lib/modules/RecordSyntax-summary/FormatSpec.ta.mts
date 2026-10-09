/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary FormatSpec
 * @description
 * 
 * A format named on a summary record (module ASN.1). The definition has no
 * comments.
 * 
 * ANSI/NISO Z39.50-2003 removed the Summary record syntax and gives no further
 * semantics for this type.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FormatSpec ::= SEQUENCE {
 *     type        [1] IMPLICIT InternationalString,
 *     size        [2] IMPLICIT INTEGER OPTIONAL,
 *     bestPosn    [3] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FormatSpec {
    /**
     * @summary `type_`.
     * @description
     * 
     * ANSI/NISO Z39.50-2003 removed the Summary record syntax and gives no
     * further semantics. The module ASN.1 does not comment this component.
     * @public
     * @readonly
     */
    readonly type_: InternationalString;
    /**
     * @summary `size`.
     * @description
     * 
     * ANSI/NISO Z39.50-2003 removed the Summary record syntax and gives no
     * further semantics. The module ASN.1 does not comment this component.
     * @public
     * @readonly
     */
    readonly size: OPTIONAL<INTEGER>;
    /**
     * @summary `bestPosn`.
     * @description
     * 
     * ANSI/NISO Z39.50-2003 removed the Summary record syntax and gives no
     * further semantics. The module ASN.1 does not comment this component.
     * @public
     * @readonly
     */
    readonly bestPosn: OPTIONAL<INTEGER>;

    constructor (
        type_: InternationalString,
        size: OPTIONAL<INTEGER>,
        bestPosn: OPTIONAL<INTEGER>
    ) {
        this.type_ = type_;
        this.size = size;
        this.bestPosn = bestPosn;
    }

    /**
     * @summary Restructures an object into a FormatSpec
     * @description
     * 
     * This takes an `object` and converts it to a `FormatSpec`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FormatSpec`.
     * @returns {FormatSpec}
     */
    public static _from_object (_o: { [_K in keyof (FormatSpec)]: (FormatSpec)[_K] }): FormatSpec {
        return new FormatSpec(_o.type_, _o.size, _o.bestPosn);
    }


}

/**
 * @summary The Leading Root Component Types of FormatSpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FormatSpec: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("size", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bestPosn", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FormatSpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FormatSpec: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FormatSpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FormatSpec: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FormatSpec: $.ASN1Decoder<FormatSpec> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FormatSpec
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FormatSpec (el: _Element): FormatSpec {
    if (!_cached_decoder_for_FormatSpec) { _cached_decoder_for_FormatSpec = function (el: _Element): FormatSpec {
    let type_!: InternationalString;
    let size: OPTIONAL<INTEGER>;
    let bestPosn: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "size": (_el: _Element): void => { size = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "bestPosn": (_el: _Element): void => { bestPosn = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FormatSpec,
        _extension_additions_list_spec_for_FormatSpec,
        _root_component_type_list_2_spec_for_FormatSpec,
        undefined,
    );
    return new FormatSpec(
        type_,
        size,
        bestPosn
    );
}; }
    return _cached_decoder_for_FormatSpec(el);
}

let _cached_encoder_for_FormatSpec: $.ASN1Encoder<FormatSpec> | null = null;

/**
 * @summary Encodes a(n) FormatSpec into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FormatSpec, encoded as an ASN.1 Element.
 */
export
function _encode_FormatSpec (value: FormatSpec, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FormatSpec) { _cached_encoder_for_FormatSpec = function (value: FormatSpec, elGetter: $.ASN1Encoder<FormatSpec>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.type_, $.BER);
    if (value.size !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.size, $.BER);
    }
    if (value.bestPosn !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.bestPosn, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FormatSpec(value, elGetter);
}


/* eslint-enable */

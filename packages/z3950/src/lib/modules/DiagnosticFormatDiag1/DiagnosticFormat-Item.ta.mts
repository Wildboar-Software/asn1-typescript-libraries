/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagnosticFormat_Item_diagnostic, _decode_DiagnosticFormat_Item_diagnostic, _encode_DiagnosticFormat_Item_diagnostic } from "../DiagnosticFormatDiag1/DiagnosticFormat-Item-diagnostic.ta.mjs";
// export { DiagnosticFormat_Item_diagnostic, _decode_DiagnosticFormat_Item_diagnostic, _encode_DiagnosticFormat_Item_diagnostic } from "../DiagnosticFormatDiag1/DiagnosticFormat-Item-diagnostic.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary DiagnosticFormat_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFormat-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DiagnosticFormat_Item {
    /**
     * @summary `diagnostic`.
     * @public
     * @readonly
     */
    readonly diagnostic: OPTIONAL<DiagnosticFormat_Item_diagnostic>;
    /**
     * @summary `message`.
     * @public
     * @readonly
     */
    readonly message: OPTIONAL<InternationalString>;

    constructor (
        diagnostic: OPTIONAL<DiagnosticFormat_Item_diagnostic>,
        message: OPTIONAL<InternationalString>
    ) {
        this.diagnostic = diagnostic;
        this.message = message;
    }

    /**
     * @summary Restructures an object into a DiagnosticFormat_Item
     * @description
     * 
     * This takes an `object` and converts it to a `DiagnosticFormat_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DiagnosticFormat_Item`.
     * @returns {DiagnosticFormat_Item}
     */
    public static _from_object (_o: { [_K in keyof (DiagnosticFormat_Item)]: (DiagnosticFormat_Item)[_K] }): DiagnosticFormat_Item {
        return new DiagnosticFormat_Item(_o.diagnostic, _o.message);
    }


}

/**
 * @summary The Leading Root Component Types of DiagnosticFormat_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DiagnosticFormat_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("diagnostic", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("message", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DiagnosticFormat_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DiagnosticFormat_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DiagnosticFormat_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DiagnosticFormat_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DiagnosticFormat_Item: $.ASN1Decoder<DiagnosticFormat_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFormat_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFormat_Item (el: _Element): DiagnosticFormat_Item {
    if (!_cached_decoder_for_DiagnosticFormat_Item) { _cached_decoder_for_DiagnosticFormat_Item = function (el: _Element): DiagnosticFormat_Item {
    let diagnostic: OPTIONAL<DiagnosticFormat_Item_diagnostic>;
    let message: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "diagnostic": (_el: _Element): void => { diagnostic = $._decode_explicit<DiagnosticFormat_Item_diagnostic>(() => _decode_DiagnosticFormat_Item_diagnostic)(_el); },
        "message": (_el: _Element): void => { message = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DiagnosticFormat_Item,
        _extension_additions_list_spec_for_DiagnosticFormat_Item,
        _root_component_type_list_2_spec_for_DiagnosticFormat_Item,
        undefined,
    );
    return new DiagnosticFormat_Item(
        diagnostic,
        message
    );
}; }
    return _cached_decoder_for_DiagnosticFormat_Item(el);
}

let _cached_encoder_for_DiagnosticFormat_Item: $.ASN1Encoder<DiagnosticFormat_Item> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFormat_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFormat_Item, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFormat_Item (value: DiagnosticFormat_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFormat_Item) { _cached_encoder_for_DiagnosticFormat_Item = function (value: DiagnosticFormat_Item, elGetter: $.ASN1Encoder<DiagnosticFormat_Item>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.diagnostic !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticFormat_Item_diagnostic, $.BER)(value.diagnostic, $.BER);
    }
    if (value.message !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.message, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DiagnosticFormat_Item(value, elGetter);
}


/* eslint-enable */

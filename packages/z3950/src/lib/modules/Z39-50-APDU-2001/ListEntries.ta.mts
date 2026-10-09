/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Entry, _decode_Entry, _encode_Entry } from "../Z39-50-APDU-2001/Entry.ta.mjs";
// export { Entry, _decode_Entry, _encode_Entry } from "../Z39-50-APDU-2001/Entry.ta.mjs";
import { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";
// export { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";


/**
 * @summary ListEntries
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListEntries ::= SEQUENCE {
 *     entries                 [1] IMPLICIT SEQUENCE OF Entry OPTIONAL,
 *     nonsurrogateDiagnostics [2] IMPLICIT SEQUENCE OF DiagRec OPTIONAL
 *     --At least one of entries and nonsurrogateDiagnostics must occur
 * }
 * ```
 * 
 * @class
 */
export
class ListEntries {
    /**
     * @summary `entries`.
     * @public
     * @readonly
     */
    readonly entries: OPTIONAL<Entry[]>;
    /**
     * @summary `nonsurrogateDiagnostics`.
     * @public
     * @readonly
     */
    readonly nonsurrogateDiagnostics: OPTIONAL<DiagRec[]>;

    constructor (
        entries: OPTIONAL<Entry[]>,
        nonsurrogateDiagnostics: OPTIONAL<DiagRec[]>
    ) {
        this.entries = entries;
        this.nonsurrogateDiagnostics = nonsurrogateDiagnostics;
    }

    /**
     * @summary Restructures an object into a ListEntries
     * @description
     * 
     * This takes an `object` and converts it to a `ListEntries`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ListEntries`.
     * @returns {ListEntries}
     */
    public static _from_object (_o: { [_K in keyof (ListEntries)]: (ListEntries)[_K] }): ListEntries {
        return new ListEntries(_o.entries, _o.nonsurrogateDiagnostics);
    }


}

/**
 * @summary The Leading Root Component Types of ListEntries
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ListEntries: $.ComponentSpec[] = [
    new $.ComponentSpec("entries", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nonsurrogateDiagnostics", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ListEntries
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ListEntries: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ListEntries
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ListEntries: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ListEntries: $.ASN1Decoder<ListEntries> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListEntries
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListEntries (el: _Element): ListEntries {
    if (!_cached_decoder_for_ListEntries) { _cached_decoder_for_ListEntries = function (el: _Element): ListEntries {
    let entries: OPTIONAL<Entry[]>;
    let nonsurrogateDiagnostics: OPTIONAL<DiagRec[]>;
    const callbacks: $.DecodingMap = {
        "entries": (_el: _Element): void => { entries = $._decode_implicit<Entry[]>(() => $._decodeSequenceOf<Entry>(() => _decode_Entry))(_el); },
        "nonsurrogateDiagnostics": (_el: _Element): void => { nonsurrogateDiagnostics = $._decode_implicit<DiagRec[]>(() => $._decodeSequenceOf<DiagRec>(() => _decode_DiagRec))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ListEntries,
        _extension_additions_list_spec_for_ListEntries,
        _root_component_type_list_2_spec_for_ListEntries,
        undefined,
    );
    return new ListEntries(
        entries,
        nonsurrogateDiagnostics
    );
}; }
    return _cached_decoder_for_ListEntries(el);
}

let _cached_encoder_for_ListEntries: $.ASN1Encoder<ListEntries> | null = null;

/**
 * @summary Encodes a(n) ListEntries into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListEntries, encoded as an ASN.1 Element.
 */
export
function _encode_ListEntries (value: ListEntries, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListEntries) { _cached_encoder_for_ListEntries = function (value: ListEntries, elGetter: $.ASN1Encoder<ListEntries>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.entries !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Entry>(() => _encode_Entry, $.BER), $.BER)(value.entries, $.BER);
    }
    if (value.nonsurrogateDiagnostics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<DiagRec>(() => _encode_DiagRec, $.BER), $.BER)(value.nonsurrogateDiagnostics, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ListEntries(value, elGetter);
}


/* eslint-enable */

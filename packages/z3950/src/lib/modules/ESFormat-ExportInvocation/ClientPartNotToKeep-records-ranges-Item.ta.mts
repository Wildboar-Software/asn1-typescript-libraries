/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClientPartNotToKeep_records_ranges_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartNotToKeep-records-ranges-Item ::= SEQUENCE {
 *     start [1] IMPLICIT INTEGER,
 *     count [2] IMPLICIT INTEGER OPTIONAL  -- Count may be omitted only on last range,
 *     -- to indicate "all remaining records beginning with 'start'."
 * }
 * ```
 * 
 * @class
 */
export
class ClientPartNotToKeep_records_ranges_Item {
    /**
     * @summary `start`.
     * @public
     * @readonly
     */
    readonly start: INTEGER;
    /**
     * @summary `count`.
     * @public
     * @readonly
     */
    readonly count: OPTIONAL<INTEGER>;

    constructor (
        start: INTEGER,
        count: OPTIONAL<INTEGER>
    ) {
        this.start = start;
        this.count = count;
    }

    /**
     * @summary Restructures an object into a ClientPartNotToKeep_records_ranges_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ClientPartNotToKeep_records_ranges_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClientPartNotToKeep_records_ranges_Item`.
     * @returns {ClientPartNotToKeep_records_ranges_Item}
     */
    public static _from_object (_o: { [_K in keyof (ClientPartNotToKeep_records_ranges_Item)]: (ClientPartNotToKeep_records_ranges_Item)[_K] }): ClientPartNotToKeep_records_ranges_Item {
        return new ClientPartNotToKeep_records_ranges_Item(_o.start, _o.count);
    }


}

/**
 * @summary The Leading Root Component Types of ClientPartNotToKeep_records_ranges_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClientPartNotToKeep_records_ranges_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("start", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("count", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ClientPartNotToKeep_records_ranges_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClientPartNotToKeep_records_ranges_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClientPartNotToKeep_records_ranges_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClientPartNotToKeep_records_ranges_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClientPartNotToKeep_records_ranges_Item: $.ASN1Decoder<ClientPartNotToKeep_records_ranges_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartNotToKeep_records_ranges_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartNotToKeep_records_ranges_Item (el: _Element): ClientPartNotToKeep_records_ranges_Item {
    if (!_cached_decoder_for_ClientPartNotToKeep_records_ranges_Item) { _cached_decoder_for_ClientPartNotToKeep_records_ranges_Item = function (el: _Element): ClientPartNotToKeep_records_ranges_Item {
    let start!: INTEGER;
    let count: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "start": (_el: _Element): void => { start = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "count": (_el: _Element): void => { count = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClientPartNotToKeep_records_ranges_Item,
        _extension_additions_list_spec_for_ClientPartNotToKeep_records_ranges_Item,
        _root_component_type_list_2_spec_for_ClientPartNotToKeep_records_ranges_Item,
        undefined,
    );
    return new ClientPartNotToKeep_records_ranges_Item(
        start,
        count
    );
}; }
    return _cached_decoder_for_ClientPartNotToKeep_records_ranges_Item(el);
}

let _cached_encoder_for_ClientPartNotToKeep_records_ranges_Item: $.ASN1Encoder<ClientPartNotToKeep_records_ranges_Item> | null = null;

/**
 * @summary Encodes a(n) ClientPartNotToKeep_records_ranges_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartNotToKeep_records_ranges_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartNotToKeep_records_ranges_Item (value: ClientPartNotToKeep_records_ranges_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartNotToKeep_records_ranges_Item) { _cached_encoder_for_ClientPartNotToKeep_records_ranges_Item = function (value: ClientPartNotToKeep_records_ranges_Item, elGetter: $.ASN1Encoder<ClientPartNotToKeep_records_ranges_Item>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.start, $.BER);
    if (value.count !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.count, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ClientPartNotToKeep_records_ranges_Item(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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



/**
 * @summary Block
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Block ::= SEQUENCE {
 *     zValue [0] IMPLICIT INTEGER OPTIONAL,
 *     bValue [1] IMPLICIT INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class Block {
    constructor (
        /**
         * @summary `zValue`.
         * @public
         * @readonly
         */
        readonly zValue: OPTIONAL<INTEGER>,
        /**
         * @summary `bValue`.
         * @public
         * @readonly
         */
        readonly bValue: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a Block
     * @description
     * 
     * This takes an `object` and converts it to a `Block`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Block`.
     * @returns {Block}
     */
    public static _from_object (_o: { [_K in keyof (Block)]: (Block)[_K] }): Block {
        return new Block(_o.zValue, _o.bValue);
    }


}

/**
 * @summary The Leading Root Component Types of Block
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Block: $.ComponentSpec[] = [
    new $.ComponentSpec("zValue", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bValue", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Block
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Block: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Block
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Block: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Block: $.ASN1Decoder<Block> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Block
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Block (el: _Element): Block {
    if (!_cached_decoder_for_Block) { _cached_decoder_for_Block = function (el: _Element): Block {
    let zValue: OPTIONAL<INTEGER>;
    let bValue!: INTEGER;
    const callbacks: $.DecodingMap = {
        "zValue": (_el: _Element): void => { zValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "bValue": (_el: _Element): void => { bValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Block,
        _extension_additions_list_spec_for_Block,
        _root_component_type_list_2_spec_for_Block,
        undefined,
    );
    return new Block(
        zValue,
        bValue
    );
}; }
    return _cached_decoder_for_Block(el);
}

let _cached_encoder_for_Block: $.ASN1Encoder<Block> | null = null;

/**
 * @summary Encodes a(n) Block into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Block, encoded as an ASN.1 Element.
 */
export
function _encode_Block (value: Block, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Block) { _cached_encoder_for_Block = function (value: Block): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.zValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.zValue, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.bValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Block(value, elGetter);
}


/* eslint-enable */

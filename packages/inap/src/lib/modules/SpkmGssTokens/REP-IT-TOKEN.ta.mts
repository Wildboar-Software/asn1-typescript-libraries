/* eslint-disable */
import {
    BIT_STRING,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Random_Integer, _decode_Random_Integer, _encode_Random_Integer } from "../SpkmGssTokens/Random-Integer.ta.mjs";
// export { Random_Integer, _decode_Random_Integer, _encode_Random_Integer } from "../SpkmGssTokens/Random-Integer.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";


/**
 * @summary REP_IT_TOKEN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * REP-IT-TOKEN ::= SEQUENCE {
 *   tok-id        INTEGER(768), -- shall contain 0300 (hex)
 *   context-id    Random-Integer,
 *   randSrc       Random-Integer,
 *   randTarg      Random-Integer,
 *   targ-name     Name,
 *   src-name      Name OPTIONAL,
 *   key-estb-rep  BIT STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class REP_IT_TOKEN {
    /**
     * @summary `tok_id`.
     * @public
     * @readonly
     */
    readonly tok_id: INTEGER;
    /**
     * @summary `context_id`.
     * @public
     * @readonly
     */
    readonly context_id: Random_Integer;
    /**
     * @summary `randSrc`.
     * @public
     * @readonly
     */
    readonly randSrc: Random_Integer;
    /**
     * @summary `randTarg`.
     * @public
     * @readonly
     */
    readonly randTarg: Random_Integer;
    /**
     * @summary `targ_name`.
     * @public
     * @readonly
     */
    readonly targ_name: Name;
    /**
     * @summary `src_name`.
     * @public
     * @readonly
     */
    readonly src_name: OPTIONAL<Name>;
    /**
     * @summary `key_estb_rep`.
     * @public
     * @readonly
     */
    readonly key_estb_rep: OPTIONAL<BIT_STRING>;

    constructor (
        tok_id: INTEGER,
        context_id: Random_Integer,
        randSrc: Random_Integer,
        randTarg: Random_Integer,
        targ_name: Name,
        src_name: OPTIONAL<Name>,
        key_estb_rep: OPTIONAL<BIT_STRING>
    ) {
        this.tok_id = tok_id;
        this.context_id = context_id;
        this.randSrc = randSrc;
        this.randTarg = randTarg;
        this.targ_name = targ_name;
        this.src_name = src_name;
        this.key_estb_rep = key_estb_rep;
    }

    /**
     * @summary Restructures an object into a REP_IT_TOKEN
     * @description
     * 
     * This takes an `object` and converts it to a `REP_IT_TOKEN`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `REP_IT_TOKEN`.
     * @returns {REP_IT_TOKEN}
     */
    public static _from_object (_o: { [_K in keyof (REP_IT_TOKEN)]: (REP_IT_TOKEN)[_K] }): REP_IT_TOKEN {
        return new REP_IT_TOKEN(_o.tok_id, _o.context_id, _o.randSrc, _o.randTarg, _o.targ_name, _o.src_name, _o.key_estb_rep);
    }


}

/**
 * @summary The Leading Root Component Types of REP_IT_TOKEN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_REP_IT_TOKEN: $.ComponentSpec[] = [
    new $.ComponentSpec("tok-id", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("context-id", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("randSrc", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("randTarg", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("targ-name", false, $.hasAnyTag),
    new $.ComponentSpec("src-name", true, $.or($.hasTag(_TagClass.universal, 16))),
    new $.ComponentSpec("key-estb-rep", true, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of REP_IT_TOKEN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_REP_IT_TOKEN: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of REP_IT_TOKEN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_REP_IT_TOKEN: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_REP_IT_TOKEN: $.ASN1Decoder<REP_IT_TOKEN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) REP_IT_TOKEN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_REP_IT_TOKEN (el: _Element): REP_IT_TOKEN {
    if (!_cached_decoder_for_REP_IT_TOKEN) { _cached_decoder_for_REP_IT_TOKEN = function (el: _Element): REP_IT_TOKEN {
    let tok_id!: INTEGER;
    let context_id!: Random_Integer;
    let randSrc!: Random_Integer;
    let randTarg!: Random_Integer;
    let targ_name!: Name;
    let src_name: OPTIONAL<Name>;
    let key_estb_rep: OPTIONAL<BIT_STRING>;
    const callbacks: $.DecodingMap = {
        "tok-id": (_el: _Element): void => { tok_id = $._decodeInteger(_el); },
        "context-id": (_el: _Element): void => { context_id = _decode_Random_Integer(_el); },
        "randSrc": (_el: _Element): void => { randSrc = _decode_Random_Integer(_el); },
        "randTarg": (_el: _Element): void => { randTarg = _decode_Random_Integer(_el); },
        "targ-name": (_el: _Element): void => { targ_name = _decode_Name(_el); },
        "src-name": (_el: _Element): void => { src_name = _decode_Name(_el); },
        "key-estb-rep": (_el: _Element): void => { key_estb_rep = $._decodeBitString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_REP_IT_TOKEN,
        _extension_additions_list_spec_for_REP_IT_TOKEN,
        _root_component_type_list_2_spec_for_REP_IT_TOKEN,
        undefined,
    );
    return new REP_IT_TOKEN(
        tok_id,
        context_id,
        randSrc,
        randTarg,
        targ_name,
        src_name,
        key_estb_rep
    );
}; }
    return _cached_decoder_for_REP_IT_TOKEN(el);
}

let _cached_encoder_for_REP_IT_TOKEN: $.ASN1Encoder<REP_IT_TOKEN> | null = null;

/**
 * @summary Encodes a(n) REP_IT_TOKEN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The REP_IT_TOKEN, encoded as an ASN.1 Element.
 */
export
function _encode_REP_IT_TOKEN (value: REP_IT_TOKEN, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_REP_IT_TOKEN) { _cached_encoder_for_REP_IT_TOKEN = function (value: REP_IT_TOKEN, elGetter: $.ASN1Encoder<REP_IT_TOKEN>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeInteger(value.tok_id, $.BER));
    _components.push(/* REQUIRED   */ _encode_Random_Integer(value.context_id, $.BER));
    _components.push(/* REQUIRED   */ _encode_Random_Integer(value.randSrc, $.BER));
    _components.push(/* REQUIRED   */ _encode_Random_Integer(value.randTarg, $.BER));
    _components.push(/* REQUIRED   */ _encode_Name(value.targ_name, $.BER));
    if (value.src_name !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Name(value.src_name, $.BER));
    }
    if (value.key_estb_rep !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeBitString(value.key_estb_rep, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_REP_IT_TOKEN(value, elGetter);
}


/* eslint-enable */

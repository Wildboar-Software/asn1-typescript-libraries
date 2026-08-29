/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Context_keyword,
    _decode_Context_keyword,
    _encode_Context_keyword,
} from '../DefinitionASN1Module/Context-keyword.ta.mjs';
import {
    Context_representation,
    _enum_for_Context_representation,
    _decode_Context_representation,
    _encode_Context_representation,
} from '../DefinitionASN1Module/Context-representation.ta.mjs';

/**
 * @summary Context
 * @description
 *
 * GDMO parameter `CONTEXT` construct: where a parameter appears in
 * protocol. `keyword` names a field of an external PDU type;
 * `representation` is one of the five CMIS contexts. Syntax of
 * `context` on a parameter template. ITU-T Rec. X.750 (10/96)
 * [§8.1.2.11](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I). GDMO: X.722 (01/92)
 * [§8.5.3.1](https://www.itu.int/rec/T-REC-X.722-199201-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context  ::=  CHOICE {
 *   keyword
 *     SEQUENCE {type-reference  DefinedType,
 *               field           Identifier},
 *   representation
 *     ENUMERATED {aCTION-INFO(0), aCTION-REPLY(1), eVENT-INFO(2), eVENT-REPLY(3),
 *                 sPECIFIC-ERROR(4)}
 * }
 * ```
 */
export type Context =
    | { keyword: Context_keyword } /* CHOICE_ALT_ROOT */
    | { representation: Context_representation } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Context: $.ASN1Decoder<Context> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Context
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context} The decoded data structure.
 */
export function _decode_Context(el: _Element): Context {
    if (!_cached_decoder_for_Context) {
        _cached_decoder_for_Context = $._decode_inextensible_choice<Context>({
            'UNIVERSAL 16': ['keyword', _decode_Context_keyword],
            'UNIVERSAL 10': ['representation', _decode_Context_representation],
        });
    }
    return _cached_decoder_for_Context(el);
}


let _cached_encoder_for_Context: $.ASN1Encoder<Context> | null = null;


/**
 * @summary Encodes a(n) Context into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context, encoded as an ASN.1 Element.
 */
export function _encode_Context(
    value: Context,
    elGetter: $.ASN1Encoder<Context>
): _Element {
    if (!_cached_encoder_for_Context) {
        _cached_encoder_for_Context = $._encode_choice<Context>(
            {
                keyword: _encode_Context_keyword,
                representation: _encode_Context_representation,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Context(value, elGetter);
}


/* eslint-enable */

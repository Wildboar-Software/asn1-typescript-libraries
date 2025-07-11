/* eslint-disable */
import {
    NULL,
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
    CreateSpecification,
    _decode_CreateSpecification,
    _encode_CreateSpecification,
} from '../DefinitionASN1Module/CreateSpecification.ta.mjs';

/**
 * @summary Create
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Create  ::=  CHOICE {present  CreateSpecification,
 *                    absent   NULL
 * }
 * ```
 */
export type Create =
    | { present: CreateSpecification } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Create: $.ASN1Decoder<Create> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Create
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Create} The decoded data structure.
 */
export function _decode_Create(el: _Element): Create {
    if (!_cached_decoder_for_Create) {
        _cached_decoder_for_Create = $._decode_inextensible_choice<Create>({
            'UNIVERSAL 16': ['present', _decode_CreateSpecification],
            'UNIVERSAL 5': ['absent', $._decodeNull],
        });
    }
    return _cached_decoder_for_Create(el);
}


let _cached_encoder_for_Create: $.ASN1Encoder<Create> | null = null;


/**
 * @summary Encodes a(n) Create into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Create, encoded as an ASN.1 Element.
 */
export function _encode_Create(value: Create, elGetter: $.ASN1Encoder<Create>): _Element {
    if (!_cached_encoder_for_Create) {
        _cached_encoder_for_Create = $._encode_choice<Create>(
            {
                present: _encode_CreateSpecification,
                absent: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Create(value, elGetter);
}


/* eslint-enable */

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
    Identified_Command_Response_command,
    _decode_Identified_Command_Response_command,
    _encode_Identified_Command_Response_command,
} from '../E-health-command-response/Identified-Command-Response-command.ta.mjs';
import {
    Identified_Command_Response_response,
    _decode_Identified_Command_Response_response,
    _encode_Identified_Command_Response_response,
} from '../E-health-command-response/Identified-Command-Response-response.ta.mjs';

/**
 * @summary Identified_Command_Response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identified-Command-Response{INTERACTIVE-MESSAGE:Messages}  ::=  CHOICE {
 *   command
 *     SEQUENCE {message-id
 *                 INTERACTIVE-MESSAGE.&id({Messages})
 *                   (CONSTRAINED BY {-- direction shall be command -- }),
 *               message-content
 *                 INTERACTIVE-MESSAGE.&Type({Messages}{@.message-id})
 *   },
 *   response
 *     SEQUENCE {message-id
 *                 INTERACTIVE-MESSAGE.&id({Messages})
 *                   (CONSTRAINED BY {-- id shall be equal to ---- expected-response of the command --
 *                      }),
 *               message-content
 *                 INTERACTIVE-MESSAGE.&Type({Messages}{@.message-id})
 *   }
 * }
 * ```
 */
export type Identified_Command_Response =
    | { command: Identified_Command_Response_command } /* CHOICE_ALT_ROOT */
    | { response: Identified_Command_Response_response } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Identified_Command_Response: $.ASN1Decoder<Identified_Command_Response> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Identified_Command_Response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Identified_Command_Response} The decoded data structure.
 */
export function _decode_Identified_Command_Response(el: _Element): Identified_Command_Response {
    if (!_cached_decoder_for_Identified_Command_Response) {
        _cached_decoder_for_Identified_Command_Response = $._decode_inextensible_choice<Identified_Command_Response>(
            {
                'CONTEXT 0': [
                    'command',
                    _decode_Identified_Command_Response_command,
                ],
                'CONTEXT 1': [
                    'response',
                    _decode_Identified_Command_Response_response,
                ],
            }
        );
    }
    return _cached_decoder_for_Identified_Command_Response(el);
}


let _cached_encoder_for_Identified_Command_Response: $.ASN1Encoder<Identified_Command_Response> | null = null;


/**
 * @summary Encodes a(n) Identified_Command_Response into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identified_Command_Response, encoded as an ASN.1 Element.
 */
export function _encode_Identified_Command_Response(
    value: Identified_Command_Response,
    elGetter: $.ASN1Encoder<Identified_Command_Response>
): _Element {
    if (!_cached_encoder_for_Identified_Command_Response) {
        _cached_encoder_for_Identified_Command_Response = $._encode_choice<Identified_Command_Response>(
            {
                command: _encode_Identified_Command_Response_command,
                response: _encode_Identified_Command_Response_response,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Identified_Command_Response(value, elGetter);
}


/* eslint-enable */

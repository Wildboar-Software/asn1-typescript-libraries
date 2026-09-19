/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ContextID, _decode_ContextID, _encode_ContextID } from "../MEDIA-GATEWAY-CONTROL/ContextID.ta.mjs";
// export { ContextID, _decode_ContextID, _encode_ContextID } from "../MEDIA-GATEWAY-CONTROL/ContextID.ta.mjs";
import { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
// export { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
import { ContextRequest, _decode_ContextRequest, _encode_ContextRequest } from "../MEDIA-GATEWAY-CONTROL/ContextRequest.ta.mjs";
// export { ContextRequest, _decode_ContextRequest, _encode_ContextRequest } from "../MEDIA-GATEWAY-CONTROL/ContextRequest.ta.mjs";
import { CommandReply, _decode_CommandReply, _encode_CommandReply } from "../MEDIA-GATEWAY-CONTROL/CommandReply.ta.mjs";
// export { CommandReply, _decode_CommandReply, _encode_CommandReply } from "../MEDIA-GATEWAY-CONTROL/CommandReply.ta.mjs";


/**
 * @summary ActionReply
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionReply ::= SEQUENCE
 *     {
 *         contextId                [0] ContextID,
 *         errorDescriptor            [1] ErrorDescriptor OPTIONAL,
 *         contextReply            [2] ContextRequest OPTIONAL,
 *         commandReply            [3] SEQUENCE OF CommandReply
 *     }
 * ```
 * 
 * @class
 */
export
class ActionReply {
    constructor (
        /**
         * @summary `contextId`.
         * @public
         * @readonly
         */
        readonly contextId: ContextID,
        /**
         * @summary `errorDescriptor`.
         * @public
         * @readonly
         */
        readonly errorDescriptor: OPTIONAL<ErrorDescriptor>,
        /**
         * @summary `contextReply`.
         * @public
         * @readonly
         */
        readonly contextReply: OPTIONAL<ContextRequest>,
        /**
         * @summary `commandReply`.
         * @public
         * @readonly
         */
        readonly commandReply: CommandReply[]
    ) {}

    /**
     * @summary Restructures an object into a ActionReply
     * @description
     * 
     * This takes an `object` and converts it to a `ActionReply`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActionReply`.
     * @returns {ActionReply}
     */
    public static _from_object (_o: { [_K in keyof (ActionReply)]: (ActionReply)[_K] }): ActionReply {
        return new ActionReply(_o.contextId, _o.errorDescriptor, _o.contextReply, _o.commandReply);
    }


}

/**
 * @summary The Leading Root Component Types of ActionReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ActionReply: $.ComponentSpec[] = [
    new $.ComponentSpec("contextId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("errorDescriptor", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("contextReply", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("commandReply", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ActionReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ActionReply: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ActionReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ActionReply: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ActionReply: $.ASN1Decoder<ActionReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActionReply
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActionReply (el: _Element): ActionReply {
    if (!_cached_decoder_for_ActionReply) { _cached_decoder_for_ActionReply = function (el: _Element): ActionReply {
    let contextId!: ContextID;
    let errorDescriptor: OPTIONAL<ErrorDescriptor>;
    let contextReply: OPTIONAL<ContextRequest>;
    let commandReply!: CommandReply[];
    const callbacks: $.DecodingMap = {
        "contextId": (_el: _Element): void => { contextId = $._decode_implicit<ContextID>(() => _decode_ContextID)(_el); },
        "errorDescriptor": (_el: _Element): void => { errorDescriptor = $._decode_implicit<ErrorDescriptor>(() => _decode_ErrorDescriptor)(_el); },
        "contextReply": (_el: _Element): void => { contextReply = $._decode_implicit<ContextRequest>(() => _decode_ContextRequest)(_el); },
        "commandReply": (_el: _Element): void => { commandReply = $._decode_implicit<CommandReply[]>(() => $._decodeSequenceOf<CommandReply>(() => _decode_CommandReply))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ActionReply,
        _extension_additions_list_spec_for_ActionReply,
        _root_component_type_list_2_spec_for_ActionReply,
        undefined,
    );
    return new ActionReply(
        contextId,
        errorDescriptor,
        contextReply,
        commandReply
    );
}; }
    return _cached_decoder_for_ActionReply(el);
}

let _cached_encoder_for_ActionReply: $.ASN1Encoder<ActionReply> | null = null;

/**
 * @summary Encodes a(n) ActionReply into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionReply, encoded as an ASN.1 Element.
 */
export
function _encode_ActionReply (value: ActionReply, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActionReply) { _cached_encoder_for_ActionReply = function (value: ActionReply, elGetter: $.ASN1Encoder<ActionReply>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ContextID, $.BER)(value.contextId, $.BER),
            /* IF_ABSENT  */ ((value.errorDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ErrorDescriptor, $.BER)(value.errorDescriptor, $.BER)),
            /* IF_ABSENT  */ ((value.contextReply === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ContextRequest, $.BER)(value.contextReply, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<CommandReply>(() => _encode_CommandReply, $.BER), $.BER)(value.commandReply, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ActionReply(value, elGetter);
}


/* eslint-enable */

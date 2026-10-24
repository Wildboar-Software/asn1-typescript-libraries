/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../PSS1-Service-APDUs-asn1-97/InvokeId.ta.mjs";

/**
 * @summary Invoke
 * @description
 *
 * Request that the remote SS-Control perform an operation (ECMA-165 §4.22,
 * §6.4, §11.3.3.4). The operation and its argument are defined by the
 * supplementary service (§8.2). The invoke identifier correlates the later
 * return result, return error, or reject. A child invoke also names the
 * parent operation it continues.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Invoke { InvokeId: InvokeIdSet, OPERATION: Operations } ::= SEQUENCE {
 *     invokeId InvokeId (InvokeIdSet)
 *         (
 *             CONSTRAINED BY {
 *                 -- must be unambiguous --
 *             }
 *             ! RejectProblem: invoke-duplicateInvocation
 *         ),
 *     linkedId [0] InvokeId
 *         (
 *             CONSTRAINED BY {
 *                 -- must identify an outstanding operation --
 *             }
 *             ! RejectProblem: invoke-unrecognisedLinkedId
 *         )
 *         (
 *             CONSTRAINED BY {
 *                 -- which has one or more linked operations--
 *             }
 *             ! RejectProblem: invoke-linkedResponseUnexpected
 *         ) OPTIONAL,
 *     opcode OPERATION.&operationCode ({Operations} ! RejectProblem: invoke-unrecognisedOperation),
 *     argument OPERATION.&ArgumentType
 *         (
 *             {Operations} {@opcode}
 *             ! RejectProblem: invoke-mistypedArgument
 *         ) OPTIONAL
 * }
 *     (
 *         CONSTRAINED BY {
 *             -- must conform to the above definition --
 *         }
 *         ! RejectProblem: general-mistypedPDU
 *     )
 *     (
 *         WITH COMPONENTS { ..., linkedId ABSENT }
 *         |
 *         WITH COMPONENTS {
 *             ...,
 *             linkedId PRESENT,
 *             opcode
 *                 (
 *                     CONSTRAINED BY {
 *                         -- must be in the &Linked field of the associated operation --
 *                     }
 *                     ! RejectProblem: invoke-unexpectedLinkedOperation
 *                 )
 *         }
 *     )
 * ```
 * 
 * @class
 */
export
class Invoke {
    /**
     * @summary `invokeId`.
     * @description
     *
     * Identifier of this invocation. It must be unambiguous; a duplicate is
     * rejected as `duplicateInvocation` (ECMA-165 §11.3.3.4, Annex G). Values
     * used here are constrained to `InvokeIdSet`.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `linkedId`.
     * @description
     *
     * Invoke identifier of the parent operation. Present only for a linked
     * child. It must name an outstanding operation that has linked operations,
     * and `opcode` must be one of those linked operations (ECMA-165 §11.3.3.4,
     * Annex G).
     * @public
     * @readonly
     */
    readonly linkedId: OPTIONAL<InvokeId>;
    /**
     * @summary `opcode`.
     * @description
     *
     * Operation to perform. It must be one of the Operations supplied for this
     * APDU; otherwise the receiver rejects `unrecognisedOperation` (ECMA-165
     * §8.2, §11.3.3.4).
     * @public
     * @readonly
     */
    readonly opcode: Code;
    /**
     * @summary `argument`.
     * @description
     *
     * Argument of `opcode`, as defined by that supplementary service. Omitted
     * when the operation has no argument. A value of the wrong type is
     * `mistypedArgument` (ECMA-165 Annex G).
     * @public
     * @readonly
     */
    readonly argument: OPTIONAL<_Element>;

    constructor (
        invokeId: InvokeId,
        linkedId: OPTIONAL<InvokeId>,
        opcode: Code,
        argument?: OPTIONAL<_Element>
    ) {
        this.invokeId = invokeId;
        this.linkedId = linkedId;
        this.opcode = opcode;
        this.argument = argument;
    }

    /**
     * @summary Restructures an object into a Invoke
     * @description
     * 
     * This takes an `object` and converts it to a `Invoke`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Invoke`.
     * @returns {Invoke}
     */
    public static _from_object (_o: { [_K in keyof (Invoke)]: (Invoke)[_K] }): Invoke {
        return new Invoke(_o.invokeId, _o.linkedId, _o.opcode, _o.argument);
    }

}

/**
 * @summary The Leading Root Component Types of Invoke
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Invoke: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("linkedId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("opcode", false, $.hasAnyTag),
    new $.ComponentSpec("argument", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Invoke
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Invoke: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Invoke
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Invoke: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Invoke: $.ASN1Decoder<Invoke> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Invoke
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Invoke (el: _Element): Invoke {
    if (!_cached_decoder_for_Invoke) { _cached_decoder_for_Invoke = function (el: _Element): Invoke {
    let invokeId!: InvokeId;
    let linkedId: OPTIONAL<InvokeId>;
    let opcode!: Code;
    let argument: OPTIONAL<_Element>;
    const callbacks: $.DecodingMap = {
        "invokeId": (_el: _Element): void => { invokeId = _decode_InvokeId(_el); },
        "linkedId": (_el: _Element): void => { linkedId = $._decode_implicit<InvokeId>(() => _decode_InvokeId)(_el); },
        "opcode": (_el: _Element): void => { opcode = _decode_Code(_el); },
        "argument": (_el: _Element): void => { argument = $._decodeAny(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Invoke,
        _extension_additions_list_spec_for_Invoke,
        _root_component_type_list_2_spec_for_Invoke,
        undefined,
    );
    return new Invoke(
        invokeId,
        linkedId,
        opcode,
        argument
    );
}; }
    return _cached_decoder_for_Invoke(el);
}

let _cached_encoder_for_Invoke: $.ASN1Encoder<Invoke> | null = null;

/**
 * @summary Encodes a(n) Invoke into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Invoke, encoded as an ASN.1 Element.
 */
export
function _encode_Invoke (value: Invoke, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Invoke) { _cached_encoder_for_Invoke = function (value: Invoke, _elGetter: $.ASN1Encoder<Invoke>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER));
    if (value.linkedId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_InvokeId, $.BER)(value.linkedId, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_Code(value.opcode, $.BER));
    if (value.argument !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeAny(value.argument, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Invoke(value, elGetter);
}

/* eslint-enable */

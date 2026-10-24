/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Facility-Information-Element-Components/InvokeId.ta.mjs";
import { type Invoke_linkedId, _decode_Invoke_linkedId, _encode_Invoke_linkedId } from "../Facility-Information-Element-Components/Invoke-linkedId.ta.mjs";
import { type Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";


/**
 * @summary Invoke
 * @description
 * 
 * Request that the peer perform an operation. `invokeId` identifies this
 * invocation and is copied into the return result, return error, or reject.
 * `linkedId`, when present, identifies an outstanding parent operation that has
 * linked operations; `opcode` must then be in that operation's `&Linked` set.
 * `argument` is omitted when the operation has no argument.
 *
 * The 1998 module calls invoke-problem integer 4 `initiatorReleasing` and
 * integer 7 `unexpectedChildOperation`. Amendment 1 names those values
 * `releaseInProgress` and `unexpectedLinkedOperation`.
 *
 * ITU-T Rec. Q.932 (05/1998) §8.2.3.1; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 8-7 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Invoke{InvokeId:InvokeIdSet, OPERATION:Operations} ::= SEQUENCE {
 *   invokeId
 *     InvokeId(InvokeIdSet)
 *       (CONSTRAINED BY {-- must be unambiguous -- } !
 *        RejectProblem:invoke-duplicateInvocation),
 *   linkedId
 *     CHOICE {present  [0] IMPLICIT present < InvokeId,
 *             absent   [1] IMPLICIT NULL
 *   }
 *   (CONSTRAINED BY { -- must identify an outstanding operation --} !
 *    RejectProblem:invoke-unrecognizedLinkedId)
 *   (CONSTRAINED BY { -- which has one or more linked operations--} !
 *    RejectProblem:invoke-linkedResponseUnexpected) OPTIONAL,
 *   opcode
 *     OPERATION.&operationCode
 *       ({Operations} !RejectProblem:invoke-unrecognizedOperation),
 *   argument
 *     OPERATION.&ArgumentType
 *       ({Operations}{@opcode} !RejectProblem:invoke-mistypedArgument) OPTIONAL
 * }
 * (CONSTRAINED BY { -- must conform to the above definition --} !
 *  RejectProblem:general-mistypedPDU)
 * (WITH COMPONENTS {
 *    ...,
 *    linkedId  ABSENT
 *  } |
 *  WITH COMPONENTS {
 *    ...,
 *    linkedId  PRESENT,
 *    opcode    (CONSTRAINED BY { -- must be in the &Linked field of the associated operation --
 *                 } !RejectProblem:invoke-unexpectedLinkedOperation)
 *  })
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
     * Identifies this invocation inside the call reference. Copied into the
     * return result, return error, or reject. Must be unambiguous. ITU-T Rec.
     * Q.932 (05/1998) §8.2.3.1.2.
     * 
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `linkedId`.
     * @description
     * 
     * Invoke identifier of the parent operation, when this invoke is a linked
     * operation. The parent must be outstanding and must have linked
     * operations. The opcode must be in that operation's `&Linked` set.
     * 
     * @public
     * @readonly
     */
    readonly linkedId: OPTIONAL<Invoke_linkedId>;
    /**
     * @summary `opcode`.
     * @description
     * 
     * Operation to perform. An unrecognized operation is rejected and the rest
     * of the message is still handled. ITU-T Rec. Q.932 (05/1998) §6.3.6.1.
     * 
     * @public
     * @readonly
     */
    readonly opcode: Code;
    /**
     * @summary `argument`.
     * @description
     * 
     * Argument of the operation. Omitted when the operation defines no
     * argument.
     * 
     * @public
     * @readonly
     */
    readonly argument: OPTIONAL<_Element>;

    constructor (
        invokeId: InvokeId,
        linkedId: OPTIONAL<Invoke_linkedId>,
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
    new $.ComponentSpec("invokeId", false, $.hasAnyTag),
    new $.ComponentSpec("linkedId", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1))),
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
    let linkedId: OPTIONAL<Invoke_linkedId>;
    let opcode!: Code;
    let argument: OPTIONAL<_Element>;
    const callbacks: $.DecodingMap = {
        "invokeId": (_el: _Element): void => { invokeId = _decode_InvokeId(_el); },
        "linkedId": (_el: _Element): void => { linkedId = _decode_Invoke_linkedId(_el); },
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
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER);
    if (value.linkedId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_Invoke_linkedId(value.linkedId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ _encode_Code(value.opcode, $.BER);
    if (value.argument !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encodeAny(value.argument, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Invoke(value, elGetter);
}


/* eslint-enable */

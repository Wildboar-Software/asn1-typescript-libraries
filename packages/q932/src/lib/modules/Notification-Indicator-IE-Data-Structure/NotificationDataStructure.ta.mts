/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Code, _decode_Code, _encode_Code } from "../Notification-Indicator-IE-Data-Structure/Code.ta.mjs";


/**
 * @summary NotificationDataStructure
 * @description
 * 
 * ASN.1 notification in octets 4 onward of a Notification indicator information
 * element, used when octet 3 is the discriminator for an ASN.1 encoded
 * component. `opcode` selects the notification. `argument` is the value defined
 * for that notification.
 *
 * Non-standardized notifications in a VPN use an object identifier for the
 * notification type. Additional information on a standardized notification is
 * carried in the argument. The description field is then only the discriminator
 * codepoint.
 *
 * ITU-T Rec. Q.932 (05/1998) §8.2.8, §9.1.3, and Annex D, D.5.2; ITU-T Rec.
 * Q.932 (1998) Amd.1 (06/2000) Table 8-14 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationDataStructure ::= SEQUENCE {
 *   opcode    NOTIFICATION.&operationCode,
 *   argument  NOTIFICATION.&ArgumentType
 * }
 * ```
 * 
 * @class
 */
export
class NotificationDataStructure {
    /**
     * @summary `opcode`.
     * @description
     * 
     * Notification code. For a non-standardized VPN notification this is an
     * object identifier. ITU-T Rec. Q.932 (05/1998) Annex D, D.5.2.
     * 
     * @public
     * @readonly
     */
    readonly opcode: Code;
    /**
     * @summary `argument`.
     * @description
     * 
     * Argument of the notification, the type that follows ARGUMENT in its
     * definition. Additional information on a standardized notification is
     * placed here.
     * 
     * @public
     * @readonly
     */
    readonly argument: _Element;

    constructor (
        opcode: Code,
        argument: _Element
    ) {
        this.opcode = opcode;
        this.argument = argument;
    }

    /**
     * @summary Restructures an object into a NotificationDataStructure
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationDataStructure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationDataStructure`.
     * @returns {NotificationDataStructure}
     */
    public static _from_object (_o: { [_K in keyof (NotificationDataStructure)]: (NotificationDataStructure)[_K] }): NotificationDataStructure {
        return new NotificationDataStructure(_o.opcode, _o.argument);
    }


}

/**
 * @summary The Leading Root Component Types of NotificationDataStructure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationDataStructure: $.ComponentSpec[] = [
    new $.ComponentSpec("opcode", false, $.hasAnyTag),
    new $.ComponentSpec("argument", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of NotificationDataStructure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationDataStructure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationDataStructure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationDataStructure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationDataStructure: $.ASN1Decoder<NotificationDataStructure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationDataStructure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationDataStructure (el: _Element): NotificationDataStructure {
    if (!_cached_decoder_for_NotificationDataStructure) { _cached_decoder_for_NotificationDataStructure = function (el: _Element): NotificationDataStructure {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NotificationDataStructure contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "opcode";
    sequence[1].name = "argument";
    let opcode!: Code;
    let argument!: _Element;
    opcode = _decode_Code(sequence[0]);
    argument = $._decodeAny(sequence[1]);
    return new NotificationDataStructure(
        opcode,
        argument,

    );
}; }
    return _cached_decoder_for_NotificationDataStructure(el);
}

let _cached_encoder_for_NotificationDataStructure: $.ASN1Encoder<NotificationDataStructure> | null = null;

/**
 * @summary Encodes a(n) NotificationDataStructure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationDataStructure, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationDataStructure (value: NotificationDataStructure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationDataStructure) { _cached_encoder_for_NotificationDataStructure = function (value: NotificationDataStructure, _elGetter: $.ASN1Encoder<NotificationDataStructure>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Code(value.opcode, $.BER),
        /* REQUIRED   */ $._encodeAny(value.argument, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_NotificationDataStructure(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Code, _decode_Code, _encode_Code } from "../Notification-class-asn1-97/Code.ta.mjs";

/**
 * @summary NotificationDataStructure
 * @description
 *
 * Contents of octet 4 of the Notification indicator when octet 3 is the
 * discriminator for notification extension or the discriminator for an ISO
 * ASN.1 notification (ECMA-165 §11.3.4 Table 37). `notificationValue` is the
 * notification code. `notificationArgument` is any additional data for that
 * code. The set parameter constrains the code to a defined notification.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationDataStructure { NOTIFICATION: NotificationSet } ::= SEQUENCE {
 *     notificationValue NOTIFICATION.&notificationCode ({NotificationSet}),
 *     notificationArgument NOTIFICATION.&ArgumentType ({NotificationSet} {@notificationValue}) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NotificationDataStructure {
    /**
     * @summary `notificationValue`.
     * @description
     *
     * Notification code, constrained to `NotificationSet`. This is the value in
     * octet 4, not the description codepoint in octet 3 (ECMA-165 §11.3.4).
     * @public
     * @readonly
     */
    readonly notificationValue: Code;
    /**
     * @summary `notificationArgument`.
     * @description
     *
     * Additional data for `notificationValue`. Omitted when that notification
     * defines no argument (ECMA-165 §11.3.4).
     * @public
     * @readonly
     */
    readonly notificationArgument: OPTIONAL<_Element>;

    constructor (
        notificationValue: Code,
        notificationArgument?: OPTIONAL<_Element>
    ) {
        this.notificationValue = notificationValue;
        this.notificationArgument = notificationArgument;
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
        return new NotificationDataStructure(_o.notificationValue, _o.notificationArgument);
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
    new $.ComponentSpec("notificationValue", false, $.hasAnyTag),
    new $.ComponentSpec("notificationArgument", true, $.hasAnyTag)
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
    let notificationValue!: Code;
    let notificationArgument: OPTIONAL<_Element>;
    const callbacks: $.DecodingMap = {
        "notificationValue": (_el: _Element): void => { notificationValue = _decode_Code(_el); },
        "notificationArgument": (_el: _Element): void => { notificationArgument = $._decodeAny(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NotificationDataStructure,
        _extension_additions_list_spec_for_NotificationDataStructure,
        _root_component_type_list_2_spec_for_NotificationDataStructure,
        undefined,
    );
    return new NotificationDataStructure(
        notificationValue,
        notificationArgument
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
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_Code(value.notificationValue, $.BER));
    if (value.notificationArgument !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeAny(value.notificationArgument, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NotificationDataStructure(value, elGetter);
}

/* eslint-enable */

/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type IA5String,
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MailBox
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MailBox ::= SEQUENCE {
 *     mailboxType     PrintableString,
 *     mailbox         IA5String,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MailBox {
    /**
     * @summary `mailboxType`.
     * @public
     * @readonly
     */
    readonly mailboxType: PrintableString;
    /**
     * @summary `mailbox`.
     * @public
     * @readonly
     */
    readonly mailbox: IA5String;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mailboxType: PrintableString,
        mailbox: IA5String,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mailboxType = mailboxType;
        this.mailbox = mailbox;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MailBox
     * @description
     * 
     * This takes an `object` and converts it to a `MailBox`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MailBox`.
     * @returns {MailBox}
     */
    public static _from_object (_o: { [_K in keyof (MailBox)]: (MailBox)[_K] }): MailBox {
        return new MailBox(_o.mailboxType, _o.mailbox, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MailBox
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MailBox: $.ComponentSpec[] = [
    new $.ComponentSpec("mailboxType", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("mailbox", false, $.hasTag(_TagClass.universal, 22))
];

/**
 * @summary The Trailing Root Component Types of MailBox
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MailBox: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MailBox
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MailBox: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MailBox: $.ASN1Decoder<MailBox> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MailBox
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MailBox (el: _Element): MailBox {
    if (!_cached_decoder_for_MailBox) { _cached_decoder_for_MailBox = function (el: _Element): MailBox {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MailBox contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mailboxType";
    sequence[1].name = "mailbox";
    const mailboxType: PrintableString = $._decodePrintableString(sequence[0]);
    const mailbox: IA5String = $._decodeIA5String(sequence[1]);
    return new MailBox(
        mailboxType,
        mailbox,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_MailBox(el);
}

let _cached_encoder_for_MailBox: $.ASN1Encoder<MailBox> | null = null;

/**
 * @summary Encodes a(n) MailBox into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MailBox, encoded as an ASN.1 Element.
 */
export
function _encode_MailBox (value: MailBox, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MailBox) { _cached_encoder_for_MailBox = function (value: MailBox, elGetter: $.ASN1Encoder<MailBox>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encodePrintableString(value.mailboxType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encodeIA5String(value.mailbox, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MailBox(value, elGetter);
}


/* eslint-enable */

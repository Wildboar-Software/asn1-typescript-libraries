/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMR_Unbind
 * @description
 *
 * Release of the association (clause 3.1). This profile sends an
 * empty sequence. Clause 3.2 defines `SMR-Unbind` as the UTC time
 * at which the association was connected (`Time-when-connected`).
 *
 * On a semi-permanent connection this is not normally sent
 * (clause 3.3.1). On a transient connection it may be sent once
 * every relay has completed with `RPAck` or `RPError`, and after a
 * guard timer following an alert (clause 3.3.2).
 *
 * Carried in N-DISCONNECT user data. If 128 octets of NS-user-data
 * are not supported, clause 3.4 carries it in an N-DATA preceding
 * the disconnect. Clause 3.2 wraps it as `RELAYdiscs` choice
 * `unbindreq` with context tag 2; this module does not.
 *
 * [ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * clauses 3.1, 3.2, 3.3, and 3.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMR-Unbind ::= SEQUENCE {
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class SMR_Unbind {
    constructor (
        /**
         * @summary Extensions that are not recognized.
         * @description
         *
         * Extension additions. The Nokia profile leaves the sequence
         * open; the root is empty.
         *
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SMR_Unbind
     * @description
     * 
     * This takes an `object` and converts it to a `SMR_Unbind`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMR_Unbind`.
     * @returns {SMR_Unbind}
     */
    public static _from_object (_o: { [_K in keyof (SMR_Unbind)]: (SMR_Unbind)[_K] }): SMR_Unbind {
        return new SMR_Unbind(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SMR_Unbind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMR_Unbind: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of SMR_Unbind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMR_Unbind: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMR_Unbind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMR_Unbind: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMR_Unbind: $.ASN1Decoder<SMR_Unbind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMR_Unbind
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMR_Unbind (el: _Element): SMR_Unbind {
    if (!_cached_decoder_for_SMR_Unbind) { _cached_decoder_for_SMR_Unbind = function (el: _Element): SMR_Unbind {
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMR_Unbind,
        _extension_additions_list_spec_for_SMR_Unbind,
        _root_component_type_list_2_spec_for_SMR_Unbind,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMR_Unbind(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMR_Unbind(el);
}

let _cached_encoder_for_SMR_Unbind: $.ASN1Encoder<SMR_Unbind> | null = null;

/**
 * @summary Encodes a(n) SMR_Unbind into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMR_Unbind, encoded as an ASN.1 Element.
 */
export
function _encode_SMR_Unbind (value: SMR_Unbind, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMR_Unbind) { _cached_encoder_for_SMR_Unbind = function (value: SMR_Unbind, elGetter: $.ASN1Encoder<SMR_Unbind>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMR_Unbind(value, elGetter);
}


/* eslint-enable */

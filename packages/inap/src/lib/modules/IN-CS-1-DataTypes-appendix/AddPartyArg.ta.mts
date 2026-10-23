/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallID, _decode_CallID, _encode_CallID } from "../IN-CS-1-DataTypes-appendix/CallID.ta.mjs";
// export { CallID, _decode_CallID, _encode_CallID } from "../IN-CS-1-DataTypes-appendix/CallID.ta.mjs";


/**
 * @summary AddPartyArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddPartyArg ::= SEQUENCE {
 *   originalCallID     [0]  CallID OPTIONAL,
 *   destinationCallID  [1]  CallID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AddPartyArg {
    /**
     * @summary `originalCallID`.
     * @public
     * @readonly
     */
    readonly originalCallID: OPTIONAL<CallID>;
    /**
     * @summary `destinationCallID`.
     * @public
     * @readonly
     */
    readonly destinationCallID: OPTIONAL<CallID>;

    constructor (
        originalCallID?: OPTIONAL<CallID>,
        destinationCallID?: OPTIONAL<CallID>
    ) {
        this.originalCallID = originalCallID;
        this.destinationCallID = destinationCallID;
    }

    /**
     * @summary Restructures an object into a AddPartyArg
     * @description
     * 
     * This takes an `object` and converts it to a `AddPartyArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddPartyArg`.
     * @returns {AddPartyArg}
     */
    public static _from_object (_o: { [_K in keyof (AddPartyArg)]: (AddPartyArg)[_K] }): AddPartyArg {
        return new AddPartyArg(_o.originalCallID, _o.destinationCallID);
    }


}

/**
 * @summary The Leading Root Component Types of AddPartyArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AddPartyArg: $.ComponentSpec[] = [
    new $.ComponentSpec("originalCallID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("destinationCallID", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AddPartyArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AddPartyArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AddPartyArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AddPartyArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AddPartyArg: $.ASN1Decoder<AddPartyArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddPartyArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddPartyArg (el: _Element): AddPartyArg {
    if (!_cached_decoder_for_AddPartyArg) { _cached_decoder_for_AddPartyArg = function (el: _Element): AddPartyArg {
    let originalCallID: OPTIONAL<CallID>;
    let destinationCallID: OPTIONAL<CallID>;
    const callbacks: $.DecodingMap = {
        "originalCallID": (_el: _Element): void => { originalCallID = $._decode_implicit<CallID>(() => _decode_CallID)(_el); },
        "destinationCallID": (_el: _Element): void => { destinationCallID = $._decode_implicit<CallID>(() => _decode_CallID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AddPartyArg,
        _extension_additions_list_spec_for_AddPartyArg,
        _root_component_type_list_2_spec_for_AddPartyArg,
        undefined,
    );
    return new AddPartyArg(
        originalCallID,
        destinationCallID
    );
}; }
    return _cached_decoder_for_AddPartyArg(el);
}

let _cached_encoder_for_AddPartyArg: $.ASN1Encoder<AddPartyArg> | null = null;

/**
 * @summary Encodes a(n) AddPartyArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddPartyArg, encoded as an ASN.1 Element.
 */
export
function _encode_AddPartyArg (value: AddPartyArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddPartyArg) { _cached_encoder_for_AddPartyArg = function (value: AddPartyArg, elGetter: $.ASN1Encoder<AddPartyArg>): _Element {
    const _components: _Element[] = [];
    if (value.originalCallID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CallID, $.BER)(value.originalCallID, $.BER));
    }
    if (value.destinationCallID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallID, $.BER)(value.destinationCallID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AddPartyArg(value, elGetter);
}


/* eslint-enable */

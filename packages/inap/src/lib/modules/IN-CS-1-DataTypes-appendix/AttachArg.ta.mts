/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS-1-Datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS-1-Datatypes/CorrelationID.ta.mjs";


/**
 * @summary AttachArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttachArg ::= SEQUENCE {
 *   newLegID               [0]  LegID OPTIONAL,
 *   correlationidentifier  [1]  CorrelationID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AttachArg {
    /**
     * @summary `newLegID`.
     * @public
     * @readonly
     */
    readonly newLegID: OPTIONAL<LegID>;
    /**
     * @summary `correlationidentifier`.
     * @public
     * @readonly
     */
    readonly correlationidentifier: OPTIONAL<CorrelationID>;

    constructor (
        newLegID?: OPTIONAL<LegID>,
        correlationidentifier?: OPTIONAL<CorrelationID>
    ) {
        this.newLegID = newLegID;
        this.correlationidentifier = correlationidentifier;
    }

    /**
     * @summary Restructures an object into a AttachArg
     * @description
     * 
     * This takes an `object` and converts it to a `AttachArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttachArg`.
     * @returns {AttachArg}
     */
    public static _from_object (_o: { [_K in keyof (AttachArg)]: (AttachArg)[_K] }): AttachArg {
        return new AttachArg(_o.newLegID, _o.correlationidentifier);
    }


}

/**
 * @summary The Leading Root Component Types of AttachArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttachArg: $.ComponentSpec[] = [
    new $.ComponentSpec("newLegID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationidentifier", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AttachArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttachArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttachArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttachArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttachArg: $.ASN1Decoder<AttachArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttachArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttachArg (el: _Element): AttachArg {
    if (!_cached_decoder_for_AttachArg) { _cached_decoder_for_AttachArg = function (el: _Element): AttachArg {
    let newLegID: OPTIONAL<LegID>;
    let correlationidentifier: OPTIONAL<CorrelationID>;
    const callbacks: $.DecodingMap = {
        "newLegID": (_el: _Element): void => { newLegID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "correlationidentifier": (_el: _Element): void => { correlationidentifier = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttachArg,
        _extension_additions_list_spec_for_AttachArg,
        _root_component_type_list_2_spec_for_AttachArg,
        undefined,
    );
    return new AttachArg(
        newLegID,
        correlationidentifier
    );
}; }
    return _cached_decoder_for_AttachArg(el);
}

let _cached_encoder_for_AttachArg: $.ASN1Encoder<AttachArg> | null = null;

/**
 * @summary Encodes a(n) AttachArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachArg, encoded as an ASN.1 Element.
 */
export
function _encode_AttachArg (value: AttachArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttachArg) { _cached_encoder_for_AttachArg = function (value: AttachArg, elGetter: $.ASN1Encoder<AttachArg>): _Element {
    const _components: _Element[] = [];
    if (value.newLegID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER)(value.newLegID, $.BER));
    }
    if (value.correlationidentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationidentifier, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AttachArg(value, elGetter);
}


/* eslint-enable */

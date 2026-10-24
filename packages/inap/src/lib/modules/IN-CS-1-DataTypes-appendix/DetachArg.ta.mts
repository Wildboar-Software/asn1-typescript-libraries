/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
import { type CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS-1-Datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS-1-Datatypes/CorrelationID.ta.mjs";


/**
 * @summary DetachArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DetachArg ::= SEQUENCE {
 *   legToBeDetached        [0]  LegID OPTIONAL,
 *   correlationidentifier  [1]  CorrelationID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DetachArg {
    /**
     * @summary `legToBeDetached`.
     * @public
     * @readonly
     */
    readonly legToBeDetached: OPTIONAL<LegID>;
    /**
     * @summary `correlationidentifier`.
     * @public
     * @readonly
     */
    readonly correlationidentifier: OPTIONAL<CorrelationID>;

    constructor (
        legToBeDetached?: OPTIONAL<LegID>,
        correlationidentifier?: OPTIONAL<CorrelationID>
    ) {
        this.legToBeDetached = legToBeDetached;
        this.correlationidentifier = correlationidentifier;
    }

    /**
     * @summary Restructures an object into a DetachArg
     * @description
     * 
     * This takes an `object` and converts it to a `DetachArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DetachArg`.
     * @returns {DetachArg}
     */
    public static _from_object (_o: { [_K in keyof (DetachArg)]: (DetachArg)[_K] }): DetachArg {
        return new DetachArg(_o.legToBeDetached, _o.correlationidentifier);
    }


}

/**
 * @summary The Leading Root Component Types of DetachArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DetachArg: $.ComponentSpec[] = [
    new $.ComponentSpec("legToBeDetached", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationidentifier", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DetachArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DetachArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DetachArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DetachArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DetachArg: $.ASN1Decoder<DetachArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DetachArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DetachArg (el: _Element): DetachArg {
    if (!_cached_decoder_for_DetachArg) { _cached_decoder_for_DetachArg = function (el: _Element): DetachArg {
    let legToBeDetached: OPTIONAL<LegID>;
    let correlationidentifier: OPTIONAL<CorrelationID>;
    const callbacks: $.DecodingMap = {
        "legToBeDetached": (_el: _Element): void => { legToBeDetached = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "correlationidentifier": (_el: _Element): void => { correlationidentifier = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DetachArg,
        _extension_additions_list_spec_for_DetachArg,
        _root_component_type_list_2_spec_for_DetachArg,
        undefined,
    );
    return new DetachArg(
        legToBeDetached,
        correlationidentifier
    );
}; }
    return _cached_decoder_for_DetachArg(el);
}

let _cached_encoder_for_DetachArg: $.ASN1Encoder<DetachArg> | null = null;

/**
 * @summary Encodes a(n) DetachArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DetachArg, encoded as an ASN.1 Element.
 */
export
function _encode_DetachArg (value: DetachArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DetachArg) { _cached_encoder_for_DetachArg = function (value: DetachArg, elGetter: $.ASN1Encoder<DetachArg>): _Element {
    const _components: _Element[] = [];
    if (value.legToBeDetached !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER)(value.legToBeDetached, $.BER));
    }
    if (value.correlationidentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationidentifier, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DetachArg(value, elGetter);
}


/* eslint-enable */

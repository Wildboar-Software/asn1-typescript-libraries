/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";


/**
 * @summary ServerPart
 * @description
 * 
 * Optional server report of how large the export is and what it has cost
 * so far. Every parameter is optional.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerPart ::= SEQUENCE {
 *     estimatedQuantity   [1] IMPLICIT IntUnit OPTIONAL,
 *     quantitySoFar       [2] IMPLICIT IntUnit OPTIONAL,
 *     estimatedCost       [3] IMPLICIT IntUnit OPTIONAL,
 *     costSoFar           [4] IMPLICIT IntUnit OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ServerPart {
    /**
     * @summary `estimatedQuantity`.
     * @description
     * 
     * Server estimate of the number of pages, message packets, or similar
     * units in the information to be exported. The standard does not fix the
     * unit beyond that.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.7.
     * 
     * @public
     * @readonly
     */
    readonly estimatedQuantity: OPTIONAL<IntUnit>;
    /**
     * @summary `quantitySoFar`.
     * @description
     * 
     * Amount actually exported so far, in the same kind of units as the
     * estimate (pages, message packets, and so on).
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.7.
     * 
     * @public
     * @readonly
     */
    readonly quantitySoFar: OPTIONAL<IntUnit>;
    /**
     * @summary `estimatedCost`.
     * @description
     * 
     * Server estimate of the cost to export this information.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.7.
     * 
     * @public
     * @readonly
     */
    readonly estimatedCost: OPTIONAL<IntUnit>;
    /**
     * @summary `costSoFar`.
     * @description
     * 
     * Cost accrued so far.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.7.
     * 
     * @public
     * @readonly
     */
    readonly costSoFar: OPTIONAL<IntUnit>;

    constructor (
        estimatedQuantity: OPTIONAL<IntUnit>,
        quantitySoFar: OPTIONAL<IntUnit>,
        estimatedCost: OPTIONAL<IntUnit>,
        costSoFar: OPTIONAL<IntUnit>
    ) {
        this.estimatedQuantity = estimatedQuantity;
        this.quantitySoFar = quantitySoFar;
        this.estimatedCost = estimatedCost;
        this.costSoFar = costSoFar;
    }

    /**
     * @summary Restructures an object into a ServerPart
     * @description
     * 
     * This takes an `object` and converts it to a `ServerPart`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServerPart`.
     * @returns {ServerPart}
     */
    public static _from_object (_o: { [_K in keyof (ServerPart)]: (ServerPart)[_K] }): ServerPart {
        return new ServerPart(_o.estimatedQuantity, _o.quantitySoFar, _o.estimatedCost, _o.costSoFar);
    }


}

/**
 * @summary The Leading Root Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServerPart: $.ComponentSpec[] = [
    new $.ComponentSpec("estimatedQuantity", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("quantitySoFar", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("estimatedCost", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("costSoFar", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServerPart: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServerPart: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServerPart: $.ASN1Decoder<ServerPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerPart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerPart (el: _Element): ServerPart {
    if (!_cached_decoder_for_ServerPart) { _cached_decoder_for_ServerPart = function (el: _Element): ServerPart {
    let estimatedQuantity: OPTIONAL<IntUnit>;
    let quantitySoFar: OPTIONAL<IntUnit>;
    let estimatedCost: OPTIONAL<IntUnit>;
    let costSoFar: OPTIONAL<IntUnit>;
    const callbacks: $.DecodingMap = {
        "estimatedQuantity": (_el: _Element): void => { estimatedQuantity = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); },
        "quantitySoFar": (_el: _Element): void => { quantitySoFar = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); },
        "estimatedCost": (_el: _Element): void => { estimatedCost = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); },
        "costSoFar": (_el: _Element): void => { costSoFar = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServerPart,
        _extension_additions_list_spec_for_ServerPart,
        _root_component_type_list_2_spec_for_ServerPart,
        undefined,
    );
    return new ServerPart(
        estimatedQuantity,
        quantitySoFar,
        estimatedCost,
        costSoFar
    );
}; }
    return _cached_decoder_for_ServerPart(el);
}

let _cached_encoder_for_ServerPart: $.ASN1Encoder<ServerPart> | null = null;

/**
 * @summary Encodes a(n) ServerPart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerPart, encoded as an ASN.1 Element.
 */
export
function _encode_ServerPart (value: ServerPart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerPart) { _cached_encoder_for_ServerPart = function (value: ServerPart, elGetter: $.ASN1Encoder<ServerPart>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.estimatedQuantity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_IntUnit, $.BER)(value.estimatedQuantity, $.BER);
    }
    if (value.quantitySoFar !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IntUnit, $.BER)(value.quantitySoFar, $.BER);
    }
    if (value.estimatedCost !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_IntUnit, $.BER)(value.estimatedCost, $.BER);
    }
    if (value.costSoFar !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_IntUnit, $.BER)(value.costSoFar, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServerPart(value, elGetter);
}


/* eslint-enable */

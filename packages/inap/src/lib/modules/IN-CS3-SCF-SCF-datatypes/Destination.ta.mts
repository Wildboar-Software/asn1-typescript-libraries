/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Destination_type, _decode_Destination_type, _encode_Destination_type, _enum_for_Destination_type } from "../IN-CS3-SCF-SCF-datatypes/Destination-type.ta.mjs";
// export { Destination_type, _enum_for_Destination_type, Destination_type_e164 /* IMPORTED_LONG_ENUMERATION_ITEM */, e164 /* IMPORTED_SHORT_ENUMERATION_ITEM */, Destination_type_x121 /* IMPORTED_LONG_ENUMERATION_ITEM */, x121 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Destination_type, _encode_Destination_type } from "../IN-CS3-SCF-SCF-datatypes/Destination-type.ta.mjs";
import { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-CS3-SSF-SCF-datatypes/GenericNumber.ta.mjs";
// export { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-CS3-SSF-SCF-datatypes/GenericNumber.ta.mjs";
import { PresentationAddress, _decode_PresentationAddress, _encode_PresentationAddress } from "../SelectedAttributeTypes/PresentationAddress.ta.mjs";
// export { PresentationAddress, _decode_PresentationAddress, _encode_PresentationAddress } from "../SelectedAttributeTypes/PresentationAddress.ta.mjs";


/**
 * @summary Destination
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Destination ::= SEQUENCE {
 *   type     [1]  ENUMERATED {e164(0), x121(1)},
 *   genadd   [2]  GenericNumber OPTIONAL,
 *   presadd  [3]  PresentationAddress OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Destination {
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: Destination_type;
    /**
     * @summary `genadd`.
     * @public
     * @readonly
     */
    readonly genadd: OPTIONAL<GenericNumber>;
    /**
     * @summary `presadd`.
     * @public
     * @readonly
     */
    readonly presadd: OPTIONAL<PresentationAddress>;

    constructor (
        type_: Destination_type,
        genadd?: OPTIONAL<GenericNumber>,
        presadd?: OPTIONAL<PresentationAddress>
    ) {
        this.type_ = type_;
        this.genadd = genadd;
        this.presadd = presadd;
    }

    /**
     * @summary Restructures an object into a Destination
     * @description
     * 
     * This takes an `object` and converts it to a `Destination`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Destination`.
     * @returns {Destination}
     */
    public static _from_object (_o: { [_K in keyof (Destination)]: (Destination)[_K] }): Destination {
        return new Destination(_o.type_, _o.genadd, _o.presadd);
    }

        /**
         * @summary The enum used as the type of the component `type_`
         * @public
         * @static
         */

    public static _enum_for_type_ = _enum_for_Destination_type;
}

/**
 * @summary The Leading Root Component Types of Destination
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Destination: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("genadd", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("presadd", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Destination
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Destination: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Destination
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Destination: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Destination: $.ASN1Decoder<Destination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Destination
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Destination (el: _Element): Destination {
    if (!_cached_decoder_for_Destination) { _cached_decoder_for_Destination = function (el: _Element): Destination {
    let type_!: Destination_type;
    let genadd: OPTIONAL<GenericNumber>;
    let presadd: OPTIONAL<PresentationAddress>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<Destination_type>(() => _decode_Destination_type)(_el); },
        "genadd": (_el: _Element): void => { genadd = $._decode_implicit<GenericNumber>(() => _decode_GenericNumber)(_el); },
        "presadd": (_el: _Element): void => { presadd = $._decode_implicit<PresentationAddress>(() => _decode_PresentationAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Destination,
        _extension_additions_list_spec_for_Destination,
        _root_component_type_list_2_spec_for_Destination,
        undefined,
    );
    return new Destination(
        type_,
        genadd,
        presadd
    );
}; }
    return _cached_decoder_for_Destination(el);
}

let _cached_encoder_for_Destination: $.ASN1Encoder<Destination> | null = null;

/**
 * @summary Encodes a(n) Destination into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Destination, encoded as an ASN.1 Element.
 */
export
function _encode_Destination (value: Destination, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Destination) { _cached_encoder_for_Destination = function (value: Destination, elGetter: $.ASN1Encoder<Destination>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Destination_type, $.BER)(value.type_, $.BER));
    if (value.genadd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_GenericNumber, $.BER)(value.genadd, $.BER));
    }
    if (value.presadd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_PresentationAddress, $.BER)(value.presadd, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Destination(value, elGetter);
}


/* eslint-enable */

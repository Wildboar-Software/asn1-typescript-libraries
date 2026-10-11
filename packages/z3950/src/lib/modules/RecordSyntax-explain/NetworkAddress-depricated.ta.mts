/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary NetworkAddress_depricated
 * @description
 * Deprecated alternative of NetworkAddress. The ASN.1 marks this alternative
 * deprecated in Z39.50-2003 (spelled `depricated` there). The standard does not
 * name a replacement and does not define these components. ANSI/NISO
 * Z39.50-2003 Explain ASN.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkAddress-depricated ::= SEQUENCE {
 *     depricated0 [0] IMPLICIT InternationalString,
 *     depricated1 [1] IMPLICIT InternationalString OPTIONAL,
 *     depricated2 [2] IMPLICIT InternationalString OPTIONAL,
 *     depricated3 [3] IMPLICIT InternationalString
 * }
 * ```
 * 
 * @class
 */
export
class NetworkAddress_depricated {
    /**
     * @summary `depricated0`.
     * @description
     * The standard marks the alternative deprecated and does not define this
     * component. ANSI/NISO Z39.50-2003 Explain ASN.1.
     * @public
     * @readonly
     */
    readonly depricated0: InternationalString;
    /**
     * @summary `depricated1`.
     * @description
     * The standard marks the alternative deprecated and does not define this
     * component. ANSI/NISO Z39.50-2003 Explain ASN.1.
     * @public
     * @readonly
     */
    readonly depricated1: OPTIONAL<InternationalString>;
    /**
     * @summary `depricated2`.
     * @description
     * The standard marks the alternative deprecated and does not define this
     * component. ANSI/NISO Z39.50-2003 Explain ASN.1.
     * @public
     * @readonly
     */
    readonly depricated2: OPTIONAL<InternationalString>;
    /**
     * @summary `depricated3`.
     * @description
     * The standard marks the alternative deprecated and does not define this
     * component. ANSI/NISO Z39.50-2003 Explain ASN.1.
     * @public
     * @readonly
     */
    readonly depricated3: InternationalString;

    constructor (
        depricated0: InternationalString,
        depricated1: OPTIONAL<InternationalString>,
        depricated2: OPTIONAL<InternationalString>,
        depricated3: InternationalString
    ) {
        this.depricated0 = depricated0;
        this.depricated1 = depricated1;
        this.depricated2 = depricated2;
        this.depricated3 = depricated3;
    }

    /**
     * @summary Restructures an object into a NetworkAddress_depricated
     * @description
     * 
     * This takes an `object` and converts it to a `NetworkAddress_depricated`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NetworkAddress_depricated`.
     * @returns {NetworkAddress_depricated}
     */
    public static _from_object (_o: { [_K in keyof (NetworkAddress_depricated)]: (NetworkAddress_depricated)[_K] }): NetworkAddress_depricated {
        return new NetworkAddress_depricated(_o.depricated0, _o.depricated1, _o.depricated2, _o.depricated3);
    }


}

/**
 * @summary The Leading Root Component Types of NetworkAddress_depricated
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NetworkAddress_depricated: $.ComponentSpec[] = [
    new $.ComponentSpec("depricated0", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("depricated1", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("depricated2", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("depricated3", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NetworkAddress_depricated
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NetworkAddress_depricated: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NetworkAddress_depricated
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NetworkAddress_depricated: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NetworkAddress_depricated: $.ASN1Decoder<NetworkAddress_depricated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkAddress_depricated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkAddress_depricated (el: _Element): NetworkAddress_depricated {
    if (!_cached_decoder_for_NetworkAddress_depricated) { _cached_decoder_for_NetworkAddress_depricated = function (el: _Element): NetworkAddress_depricated {
    let depricated0!: InternationalString;
    let depricated1: OPTIONAL<InternationalString>;
    let depricated2: OPTIONAL<InternationalString>;
    let depricated3!: InternationalString;
    const callbacks: $.DecodingMap = {
        "depricated0": (_el: _Element): void => { depricated0 = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "depricated1": (_el: _Element): void => { depricated1 = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "depricated2": (_el: _Element): void => { depricated2 = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "depricated3": (_el: _Element): void => { depricated3 = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NetworkAddress_depricated,
        _extension_additions_list_spec_for_NetworkAddress_depricated,
        _root_component_type_list_2_spec_for_NetworkAddress_depricated,
        undefined,
    );
    return new NetworkAddress_depricated(
        depricated0,
        depricated1,
        depricated2,
        depricated3
    );
}; }
    return _cached_decoder_for_NetworkAddress_depricated(el);
}

let _cached_encoder_for_NetworkAddress_depricated: $.ASN1Encoder<NetworkAddress_depricated> | null = null;

/**
 * @summary Encodes a(n) NetworkAddress_depricated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkAddress_depricated, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkAddress_depricated (value: NetworkAddress_depricated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkAddress_depricated) { _cached_encoder_for_NetworkAddress_depricated = function (value: NetworkAddress_depricated, elGetter: $.ASN1Encoder<NetworkAddress_depricated>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.depricated0, $.BER);
    if (value.depricated1 !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.depricated1, $.BER);
    }
    if (value.depricated2 !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.depricated2, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.depricated3, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NetworkAddress_depricated(value, elGetter);
}


/* eslint-enable */

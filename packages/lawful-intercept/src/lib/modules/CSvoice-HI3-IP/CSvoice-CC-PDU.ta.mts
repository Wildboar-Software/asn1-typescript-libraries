/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CSvoiceLIC_header, _decode_CSvoiceLIC_header, _encode_CSvoiceLIC_header } from "../CSvoice-HI3-IP/CSvoiceLIC-header.ta.mjs";
// export { CSvoiceLIC_header, _decode_CSvoiceLIC_header, _encode_CSvoiceLIC_header } from "../CSvoice-HI3-IP/CSvoiceLIC-header.ta.mjs";


/**
 * @summary CSvoice_CC_PDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSvoice-CC-PDU ::= SEQUENCE
 * {
 *      cSvoiceLIC-header    [0] CSvoiceLIC-header,
 *     payload                [1] OCTET STRING,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class CSvoice_CC_PDU {
    /**
     * @summary `cSvoiceLIC_header`.
     * @public
     * @readonly
     */
    readonly cSvoiceLIC_header: CSvoiceLIC_header;
    /**
     * @summary `payload`.
     * @public
     * @readonly
     */
    readonly payload: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cSvoiceLIC_header: CSvoiceLIC_header,
        payload: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cSvoiceLIC_header = cSvoiceLIC_header;
        this.payload = payload;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CSvoice_CC_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `CSvoice_CC_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CSvoice_CC_PDU`.
     * @returns {CSvoice_CC_PDU}
     */
    public static _from_object (_o: { [_K in keyof (CSvoice_CC_PDU)]: (CSvoice_CC_PDU)[_K] }): CSvoice_CC_PDU {
        return new CSvoice_CC_PDU(_o.cSvoiceLIC_header, _o.payload, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CSvoice_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CSvoice_CC_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("cSvoiceLIC-header", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CSvoice_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CSvoice_CC_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CSvoice_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CSvoice_CC_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CSvoice_CC_PDU: $.ASN1Decoder<CSvoice_CC_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSvoice_CC_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSvoice_CC_PDU (el: _Element): CSvoice_CC_PDU {
    if (!_cached_decoder_for_CSvoice_CC_PDU) { _cached_decoder_for_CSvoice_CC_PDU = function (el: _Element): CSvoice_CC_PDU {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CSvoice-CC-PDU contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cSvoiceLIC-header";
    sequence[1].name = "payload";
    let cSvoiceLIC_header!: CSvoiceLIC_header;
    let payload!: OCTET_STRING;
    cSvoiceLIC_header = $._decode_implicit<CSvoiceLIC_header>(() => _decode_CSvoiceLIC_header)(sequence[0]);
    payload = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new CSvoice_CC_PDU(
        cSvoiceLIC_header,
        payload,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_CSvoice_CC_PDU(el);
}

let _cached_encoder_for_CSvoice_CC_PDU: $.ASN1Encoder<CSvoice_CC_PDU> | null = null;

/**
 * @summary Encodes a(n) CSvoice_CC_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSvoice_CC_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_CSvoice_CC_PDU (value: CSvoice_CC_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSvoice_CC_PDU) { _cached_encoder_for_CSvoice_CC_PDU = function (value: CSvoice_CC_PDU, _elGetter: $.ASN1Encoder<CSvoice_CC_PDU>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CSvoiceLIC_header, $.BER)(value.cSvoiceLIC_header, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.payload, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CSvoice_CC_PDU(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallContentLinkCharacteristics, _decode_CallContentLinkCharacteristics, _encode_CallContentLinkCharacteristics } from "../HI2Operations/CallContentLinkCharacteristics.ta.mjs";
// export { CallContentLinkCharacteristics, _decode_CallContentLinkCharacteristics, _encode_CallContentLinkCharacteristics } from "../HI2Operations/CallContentLinkCharacteristics.ta.mjs";


/**
 * @summary IRI_Parameters_callContentLinkInformation
 * @description
 * 
 * The two content-of-communication channels toward the LEMF for one target
 * call. Transmit is the direction from the target; receive is the direction
 * toward the target (clause 5.3.1). In a multiparty conference controlled by
 * the target, transmit carries the target and receive carries the conference
 * sum (clause 5.5.11). Mono mode uses the first channel as the sum. Option A
 * keeps a pair per leg; option B reuses the pair of the active leg (clause
 * 5.4.4). 3GPP TS 33.108, clauses 5.3 and 5.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-callContentLinkInformation ::= SEQUENCE {
 *     cCLink1Characteristics        [1] CallContentLinkCharacteristics OPTIONAL,
 *     -- information concerning the Content of Communication Link Tx channel established
 *     -- toward the LEMF (or the sum signal channel, in case of mono mode).
 *     cCLink2Characteristics        [2] CallContentLinkCharacteristics OPTIONAL,
 *     -- information concerning the Content of Communication Link Rx channel established
 *     -- toward the LEMF.
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class IRI_Parameters_callContentLinkInformation {
    /**
     * @summary `cCLink1Characteristics`.
     * @description
     * 
     * Transmit channel toward the LEMF (content from the target), or the sum
     * signal when mono mode is used. For a target who is the multiparty
     * controller, this is the target's own signal. 3GPP TS 33.108, clauses
     * 5.3.1 and 5.5.11, annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly cCLink1Characteristics: OPTIONAL<CallContentLinkCharacteristics>;
    /**
     * @summary `cCLink2Characteristics`.
     * @description
     * 
     * Receive channel toward the LEMF (content toward the target). For a target
     * who is the multiparty controller, this is the conference sum. 3GPP TS
     * 33.108, clauses 5.3.1 and 5.5.11, annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly cCLink2Characteristics: OPTIONAL<CallContentLinkCharacteristics>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cCLink1Characteristics?: OPTIONAL<CallContentLinkCharacteristics>,
        cCLink2Characteristics?: OPTIONAL<CallContentLinkCharacteristics>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cCLink1Characteristics = cCLink1Characteristics;
        this.cCLink2Characteristics = cCLink2Characteristics;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IRI_Parameters_callContentLinkInformation
     * @description
     * 
     * This takes an `object` and converts it to a `IRI_Parameters_callContentLinkInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IRI_Parameters_callContentLinkInformation`.
     * @returns {IRI_Parameters_callContentLinkInformation}
     */
    public static _from_object (_o: { [_K in keyof (IRI_Parameters_callContentLinkInformation)]: (IRI_Parameters_callContentLinkInformation)[_K] }): IRI_Parameters_callContentLinkInformation {
        return new IRI_Parameters_callContentLinkInformation(_o.cCLink1Characteristics, _o.cCLink2Characteristics, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IRI_Parameters_callContentLinkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IRI_Parameters_callContentLinkInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("cCLink1Characteristics", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cCLink2Characteristics", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IRI_Parameters_callContentLinkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IRI_Parameters_callContentLinkInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IRI_Parameters_callContentLinkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IRI_Parameters_callContentLinkInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IRI_Parameters_callContentLinkInformation: $.ASN1Decoder<IRI_Parameters_callContentLinkInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRI_Parameters_callContentLinkInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRI_Parameters_callContentLinkInformation (el: _Element): IRI_Parameters_callContentLinkInformation {
    if (!_cached_decoder_for_IRI_Parameters_callContentLinkInformation) { _cached_decoder_for_IRI_Parameters_callContentLinkInformation = function (el: _Element): IRI_Parameters_callContentLinkInformation {
    let cCLink1Characteristics: OPTIONAL<CallContentLinkCharacteristics>;
    let cCLink2Characteristics: OPTIONAL<CallContentLinkCharacteristics>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cCLink1Characteristics": (_el: _Element): void => { cCLink1Characteristics = $._decode_implicit<CallContentLinkCharacteristics>(() => _decode_CallContentLinkCharacteristics)(_el); },
        "cCLink2Characteristics": (_el: _Element): void => { cCLink2Characteristics = $._decode_implicit<CallContentLinkCharacteristics>(() => _decode_CallContentLinkCharacteristics)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRI_Parameters_callContentLinkInformation,
        _extension_additions_list_spec_for_IRI_Parameters_callContentLinkInformation,
        _root_component_type_list_2_spec_for_IRI_Parameters_callContentLinkInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IRI_Parameters_callContentLinkInformation(
        cCLink1Characteristics,
        cCLink2Characteristics,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IRI_Parameters_callContentLinkInformation(el);
}

let _cached_encoder_for_IRI_Parameters_callContentLinkInformation: $.ASN1Encoder<IRI_Parameters_callContentLinkInformation> | null = null;

/**
 * @summary Encodes a(n) IRI_Parameters_callContentLinkInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRI_Parameters_callContentLinkInformation, encoded as an ASN.1 Element.
 */
export
function _encode_IRI_Parameters_callContentLinkInformation (value: IRI_Parameters_callContentLinkInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRI_Parameters_callContentLinkInformation) { _cached_encoder_for_IRI_Parameters_callContentLinkInformation = function (value: IRI_Parameters_callContentLinkInformation, elGetter: $.ASN1Encoder<IRI_Parameters_callContentLinkInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.cCLink1Characteristics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallContentLinkCharacteristics, $.BER)(value.cCLink1Characteristics, $.BER);
    }
    if (value.cCLink2Characteristics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CallContentLinkCharacteristics, $.BER)(value.cCLink2Characteristics, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IRI_Parameters_callContentLinkInformation(value, elGetter);
}


/* eslint-enable */

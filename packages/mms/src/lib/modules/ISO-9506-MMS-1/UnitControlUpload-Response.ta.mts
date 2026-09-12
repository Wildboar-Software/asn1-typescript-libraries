/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ControlElement, _decode_ControlElement, _encode_ControlElement } from "../ISO-9506-MMS-1/ControlElement.ta.mjs";
// export { ControlElement, _decode_ControlElement, _encode_ControlElement } from "../ISO-9506-MMS-1/ControlElement.ta.mjs";
import { UnitControlUpload_Response_nextElement, _decode_UnitControlUpload_Response_nextElement, _encode_UnitControlUpload_Response_nextElement } from "../ISO-9506-MMS-1/UnitControlUpload-Response-nextElement.ta.mjs";
// export { UnitControlUpload_Response_nextElement, _decode_UnitControlUpload_Response_nextElement, _encode_UnitControlUpload_Response_nextElement } from "../ISO-9506-MMS-1/UnitControlUpload-Response-nextElement.ta.mjs";


/**
 * @summary UnitControlUpload_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnitControlUpload-Response ::= SEQUENCE {
 *     controlElements        [0] IMPLICIT SEQUENCE OF ControlElement,
 *     nextElement            CHOICE {
 *         domain                 [1] IMPLICIT Identifier,
 *         ulsmID                 [2] IMPLICIT INTEGER,
 *         programInvocation      [3] IMPLICIT Identifier    } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UnitControlUpload_Response {
    constructor (
        /**
         * @summary `controlElements`.
         * @public
         * @readonly
         */
        readonly controlElements: ControlElement[],
        /**
         * @summary `nextElement`.
         * @public
         * @readonly
         */
        readonly nextElement: OPTIONAL<UnitControlUpload_Response_nextElement>
    ) {}

    /**
     * @summary Restructures an object into a UnitControlUpload_Response
     * @description
     * 
     * This takes an `object` and converts it to a `UnitControlUpload_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnitControlUpload_Response`.
     * @returns {UnitControlUpload_Response}
     */
    public static _from_object (_o: { [_K in keyof (UnitControlUpload_Response)]: (UnitControlUpload_Response)[_K] }): UnitControlUpload_Response {
        return new UnitControlUpload_Response(_o.controlElements, _o.nextElement);
    }


}

/**
 * @summary The Leading Root Component Types of UnitControlUpload_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UnitControlUpload_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("controlElements", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("nextElement", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3)))
];

/**
 * @summary The Trailing Root Component Types of UnitControlUpload_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UnitControlUpload_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UnitControlUpload_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UnitControlUpload_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UnitControlUpload_Response: $.ASN1Decoder<UnitControlUpload_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnitControlUpload_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnitControlUpload_Response (el: _Element): UnitControlUpload_Response {
    if (!_cached_decoder_for_UnitControlUpload_Response) { _cached_decoder_for_UnitControlUpload_Response = function (el: _Element): UnitControlUpload_Response {
    let controlElements!: ControlElement[];
    let nextElement: OPTIONAL<UnitControlUpload_Response_nextElement>;
    const callbacks: $.DecodingMap = {
        "controlElements": (_el: _Element): void => { controlElements = $._decode_implicit<ControlElement[]>(() => $._decodeSequenceOf<ControlElement>(() => _decode_ControlElement))(_el); },
        "nextElement": (_el: _Element): void => { nextElement = _decode_UnitControlUpload_Response_nextElement(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UnitControlUpload_Response,
        _extension_additions_list_spec_for_UnitControlUpload_Response,
        _root_component_type_list_2_spec_for_UnitControlUpload_Response,
        undefined,
    );
    return new UnitControlUpload_Response(
        controlElements,
        nextElement
    );
}; }
    return _cached_decoder_for_UnitControlUpload_Response(el);
}

let _cached_encoder_for_UnitControlUpload_Response: $.ASN1Encoder<UnitControlUpload_Response> | null = null;

/**
 * @summary Encodes a(n) UnitControlUpload_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitControlUpload_Response, encoded as an ASN.1 Element.
 */
export
function _encode_UnitControlUpload_Response (value: UnitControlUpload_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnitControlUpload_Response) { _cached_encoder_for_UnitControlUpload_Response = function (value: UnitControlUpload_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ControlElement>(() => _encode_ControlElement, $.BER), $.BER)(value.controlElements, $.BER),
            /* IF_ABSENT  */ ((value.nextElement === undefined) ? undefined : _encode_UnitControlUpload_Response_nextElement(value.nextElement, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UnitControlUpload_Response(value, elGetter);
}


/* eslint-enable */

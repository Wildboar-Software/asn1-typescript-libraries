/* eslint-disable */
import {
    type GraphicString,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMInterface_interfaceType, _decode_SMInterface_interfaceType, _encode_SMInterface_interfaceType, _enum_for_SMInterface_interfaceType } from "../CHFChargingDataTypes/SMInterface-interfaceType.ta.mjs";


/**
 * @summary SMInterface
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMInterface ::= SEQUENCE {
 *    interfaceId     [0] IMPLICIT GraphicString OPTIONAL,
 *    interfaceText   [1] IMPLICIT GraphicString OPTIONAL,
 *    interfacePort   [2] IMPLICIT GraphicString OPTIONAL,
 *    interfaceType   [3] IMPLICIT ENUMERATED {
 *       unkown                    ( 0 ),
 *       mobileOriginating         ( 1 ),
 *       mobileTerminating         ( 2 ),
 *       applicationOriginating    ( 3 ),
 *       applicationTerminating    ( 4 ),
 *       deviceTrigger             ( 5 ) } OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SMInterface {
    /**
     * @summary `interfaceId`.
     * @public
     * @readonly
     */
    readonly interfaceId: OPTIONAL<GraphicString>;
    /**
     * @summary `interfaceText`.
     * @public
     * @readonly
     */
    readonly interfaceText: OPTIONAL<GraphicString>;
    /**
     * @summary `interfacePort`.
     * @public
     * @readonly
     */
    readonly interfacePort: OPTIONAL<GraphicString>;
    /**
     * @summary `interfaceType`.
     * @public
     * @readonly
     */
    readonly interfaceType: OPTIONAL<SMInterface_interfaceType>;

    constructor (
        interfaceId?: OPTIONAL<GraphicString>,
        interfaceText?: OPTIONAL<GraphicString>,
        interfacePort?: OPTIONAL<GraphicString>,
        interfaceType?: OPTIONAL<SMInterface_interfaceType>
    ) {
        this.interfaceId = interfaceId;
        this.interfaceText = interfaceText;
        this.interfacePort = interfacePort;
        this.interfaceType = interfaceType;
    }

    /**
     * @summary Restructures an object into a SMInterface
     * @description
     * 
     * This takes an `object` and converts it to a `SMInterface`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMInterface`.
     * @returns {SMInterface}
     */
    public static _from_object (_o: { [_K in keyof (SMInterface)]: (SMInterface)[_K] }): SMInterface {
        return new SMInterface(_o.interfaceId, _o.interfaceText, _o.interfacePort, _o.interfaceType);
    }

        /**
         * @summary The enum used as the type of the component `interfaceType`
         * @public
         * @static
         */

    public static _enum_for_interfaceType = _enum_for_SMInterface_interfaceType;
}

/**
 * @summary The Leading Root Component Types of SMInterface
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMInterface: $.ComponentSpec[] = [
    new $.ComponentSpec("interfaceId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("interfaceText", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("interfacePort", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("interfaceType", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SMInterface
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMInterface: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMInterface
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMInterface: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMInterface: $.ASN1Decoder<SMInterface> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMInterface
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMInterface (el: _Element): SMInterface {
    if (!_cached_decoder_for_SMInterface) { _cached_decoder_for_SMInterface = function (el: _Element): SMInterface {
    let interfaceId: OPTIONAL<GraphicString>;
    let interfaceText: OPTIONAL<GraphicString>;
    let interfacePort: OPTIONAL<GraphicString>;
    let interfaceType: OPTIONAL<SMInterface_interfaceType>;
    const callbacks: $.DecodingMap = {
        "interfaceId": (_el: _Element): void => { interfaceId = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "interfaceText": (_el: _Element): void => { interfaceText = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "interfacePort": (_el: _Element): void => { interfacePort = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "interfaceType": (_el: _Element): void => { interfaceType = $._decode_implicit<SMInterface_interfaceType>(() => _decode_SMInterface_interfaceType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMInterface,
        _extension_additions_list_spec_for_SMInterface,
        _root_component_type_list_2_spec_for_SMInterface,
        undefined,
    );
    return new SMInterface(
        interfaceId,
        interfaceText,
        interfacePort,
        interfaceType
    );
}; }
    return _cached_decoder_for_SMInterface(el);
}

let _cached_encoder_for_SMInterface: $.ASN1Encoder<SMInterface> | null = null;

/**
 * @summary Encodes a(n) SMInterface into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMInterface, encoded as an ASN.1 Element.
 */
export
function _encode_SMInterface (value: SMInterface, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMInterface) { _cached_encoder_for_SMInterface = function (value: SMInterface, _elGetter: $.ASN1Encoder<SMInterface>): _Element {
    const _components: _Element[] = [];
    if (value.interfaceId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeGraphicString, $.BER)(value.interfaceId, $.BER));
    }
    if (value.interfaceText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGraphicString, $.BER)(value.interfaceText, $.BER));
    }
    if (value.interfacePort !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeGraphicString, $.BER)(value.interfacePort, $.BER));
    }
    if (value.interfaceType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_SMInterface_interfaceType, $.BER)(value.interfaceType, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMInterface(value, elGetter);
}


/* eslint-enable */

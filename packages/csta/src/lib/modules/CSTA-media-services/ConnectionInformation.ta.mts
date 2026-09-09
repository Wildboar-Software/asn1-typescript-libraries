/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    ENUMERATED,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    ConnectionInformation_flowDirection,
    _enum_for_ConnectionInformation_flowDirection,
    transmit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    receive /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    transmitAndReceive /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    none /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ConnectionInformation_flowDirection,
    _encode_ConnectionInformation_flowDirection
} from "../CSTA-media-services/ConnectionInformation-flowDirection.ta.mjs";



/**
 * @summary ConnectionInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionInformation ::= SEQUENCE
 * {     flowDirection             ENUMERATED
 *     {    transmit             (0),
 *         receive             (1),
 *         transmitAndReceive         (2),
 *         none                 (3) }         OPTIONAL,
 *     numberOfChannels         INTEGER         DEFAULT    1,
 *     mediaSessionInformation        IA5String        OPTIONAL      }
 * ```
 * 
 * @class
 */
export
class ConnectionInformation {
    constructor (
        /**
         * @summary `flowDirection`.
         * @public
         * @readonly
         */
        readonly flowDirection: OPTIONAL<ConnectionInformation_flowDirection>,
        /**
         * @summary `numberOfChannels`.
         * @public
         * @readonly
         */
        readonly numberOfChannels: OPTIONAL<INTEGER>,
        /**
         * @summary `mediaSessionInformation`.
         * @public
         * @readonly
         */
        readonly mediaSessionInformation: OPTIONAL<IA5String>
    ) {}

    /**
     * @summary Restructures an object into a ConnectionInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectionInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectionInformation`.
     * @returns {ConnectionInformation}
     */
    public static _from_object (_o: { [_K in keyof (ConnectionInformation)]: (ConnectionInformation)[_K] }): ConnectionInformation {
        return new ConnectionInformation(_o.flowDirection, _o.numberOfChannels, _o.mediaSessionInformation);
    }

    /**
     * @summary Getter that returns the default value for `numberOfChannels`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_numberOfChannels () { return 1; }        /**
         * @summary The enum used as the type of the component `flowDirection`
         * @public
         * @static
         */

    public static _enum_for_flowDirection = _enum_for_ConnectionInformation_flowDirection;
}

/**
 * @summary The Leading Root Component Types of ConnectionInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectionInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("flowDirection", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("numberOfChannels", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("mediaSessionInformation", true, $.hasTag(_TagClass.universal, 22))
];

/**
 * @summary The Trailing Root Component Types of ConnectionInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectionInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectionInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectionInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectionInformation: $.ASN1Decoder<ConnectionInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionInformation (el: _Element): ConnectionInformation {
    if (!_cached_decoder_for_ConnectionInformation) { _cached_decoder_for_ConnectionInformation = function (el: _Element): ConnectionInformation {
    let flowDirection: OPTIONAL<ConnectionInformation_flowDirection>;
    let numberOfChannels: OPTIONAL<INTEGER> = ConnectionInformation._default_value_for_numberOfChannels;
    let mediaSessionInformation: OPTIONAL<IA5String>;
    const callbacks: $.DecodingMap = {
        "flowDirection": (_el: _Element): void => { flowDirection = _decode_ConnectionInformation_flowDirection(_el); },
        "numberOfChannels": (_el: _Element): void => { numberOfChannels = $._decodeInteger(_el); },
        "mediaSessionInformation": (_el: _Element): void => { mediaSessionInformation = $._decodeIA5String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectionInformation,
        _extension_additions_list_spec_for_ConnectionInformation,
        _root_component_type_list_2_spec_for_ConnectionInformation,
        undefined,
    );
    return new ConnectionInformation(
        flowDirection,
        numberOfChannels,
        mediaSessionInformation
    );
}; }
    return _cached_decoder_for_ConnectionInformation(el);
}

let _cached_encoder_for_ConnectionInformation: $.ASN1Encoder<ConnectionInformation> | null = null;

/**
 * @summary Encodes a(n) ConnectionInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionInformation (value: ConnectionInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionInformation) { _cached_encoder_for_ConnectionInformation = function (value: ConnectionInformation, elGetter: $.ASN1Encoder<ConnectionInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.flowDirection === undefined) ? undefined : _encode_ConnectionInformation_flowDirection(value.flowDirection, $.BER)),
            /* IF_DEFAULT */ (value.numberOfChannels === undefined || $.deepEq(value.numberOfChannels, ConnectionInformation._default_value_for_numberOfChannels) ? undefined : $._encodeInteger(value.numberOfChannels, $.BER)),
            /* IF_ABSENT  */ ((value.mediaSessionInformation === undefined) ? undefined : $._encodeIA5String(value.mediaSessionInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectionInformation(value, elGetter);
}


/* eslint-enable */

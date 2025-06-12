/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  MessageID,
  _decode_MessageID,
  _encode_MessageID,
} from '../Lightweight-Directory-Access-Protocol-V3/MessageID.ta.js';
export {
  MessageID,
  _decode_MessageID,
  _encode_MessageID,
} from '../Lightweight-Directory-Access-Protocol-V3/MessageID.ta.js';
import {
  LDAPMessage_protocolOp,
  _decode_LDAPMessage_protocolOp,
  _encode_LDAPMessage_protocolOp,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPMessage-protocolOp.ta.js';
export {
  LDAPMessage_protocolOp,
  _decode_LDAPMessage_protocolOp,
  _encode_LDAPMessage_protocolOp,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPMessage-protocolOp.ta.js';
import {
  Controls,
  _decode_Controls,
  _encode_Controls,
} from '../Lightweight-Directory-Access-Protocol-V3/Controls.ta.js';
export {
  Controls,
  _decode_Controls,
  _encode_Controls,
} from '../Lightweight-Directory-Access-Protocol-V3/Controls.ta.js';

/* START_OF_SYMBOL_DEFINITION LDAPMessage */
/**
 * @summary LDAPMessage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPMessage ::= SEQUENCE {
 *   messageID   MessageID,
 *   protocolOp
 *     CHOICE {bindRequest           BindRequest,
 *             bindResponse          BindResponse,
 *             unbindRequest         UnbindRequest,
 *             searchRequest         SearchRequest,
 *             searchResEntry        SearchResultEntry,
 *             searchResDone         SearchResultDone,
 *             searchResRef          SearchResultReference,
 *             modifyRequest         ModifyRequest,
 *             modifyResponse        ModifyResponse,
 *             addRequest            AddRequest,
 *             addResponse           AddResponse,
 *             delRequest            DelRequest,
 *             delResponse           DelResponse,
 *             modDNRequest          ModifyDNRequest,
 *             modDNResponse         ModifyDNResponse,
 *             compareRequest        CompareRequest,
 *             compareResponse       CompareResponse,
 *             abandonRequest        AbandonRequest,
 *             extendedReq           ExtendedRequest,
 *             extendedResp          ExtendedResponse,
 *             ...,
 *             intermediateResponse  IntermediateResponse},
 *   controls    [0]  Controls OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class LDAPMessage {
  constructor(
    /**
     * @summary `messageID`.
     * @public
     * @readonly
     */
    readonly messageID: MessageID,
    /**
     * @summary `protocolOp`.
     * @public
     * @readonly
     */
    readonly protocolOp: LDAPMessage_protocolOp,
    /**
     * @summary `controls`.
     * @public
     * @readonly
     */
    readonly controls: OPTIONAL<Controls>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a LDAPMessage
   * @description
   *
   * This takes an `object` and converts it to a `LDAPMessage`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `LDAPMessage`.
   * @returns {LDAPMessage}
   */
  public static _from_object(
    _o: { [_K in keyof LDAPMessage]: LDAPMessage[_K] }
  ): LDAPMessage {
    return new LDAPMessage(
      _o.messageID,
      _o.protocolOp,
      _o.controls,
      _o._unrecognizedExtensionsList
    );
  }
}
/* END_OF_SYMBOL_DEFINITION LDAPMessage */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LDAPMessage */
/**
 * @summary The Leading Root Component Types of LDAPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LDAPMessage: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'messageID',
    false,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec('protocolOp', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'controls',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LDAPMessage */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LDAPMessage */
/**
 * @summary The Trailing Root Component Types of LDAPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LDAPMessage: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LDAPMessage */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LDAPMessage */
/**
 * @summary The Extension Addition Component Types of LDAPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LDAPMessage: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LDAPMessage */

/* START_OF_SYMBOL_DEFINITION _decode_LDAPMessage */
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPMessage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPMessage} The decoded data structure.
 */
export function _decode_LDAPMessage(el: _Element) {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let messageID!: MessageID;
    let protocolOp!: LDAPMessage_protocolOp;
    let controls: OPTIONAL<Controls>;
    let _unrecognizedExtensionsList: _Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        messageID: (_el: _Element): void => {
            messageID = _decode_MessageID(_el);
        },
        protocolOp: (_el: _Element): void => {
            protocolOp = _decode_LDAPMessage_protocolOp(_el);
        },
        controls: (_el: _Element): void => {
            controls = $._decode_implicit<Controls>(() => _decode_Controls)(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_LDAPMessage,
        _extension_additions_list_spec_for_LDAPMessage,
        _root_component_type_list_2_spec_for_LDAPMessage,
        (ext: _Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new LDAPMessage /* SEQUENCE_CONSTRUCTOR_CALL */(
        messageID,
        protocolOp,
        controls,
        _unrecognizedExtensionsList
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_LDAPMessage */

/* START_OF_SYMBOL_DEFINITION _encode_LDAPMessage */
/**
 * @summary Encodes a(n) LDAPMessage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPMessage, encoded as an ASN.1 Element.
 */
export function _encode_LDAPMessage(
  value: LDAPMessage,
  elGetter: $.ASN1Encoder<LDAPMessage>
) {
    const components: _Element[] = [
        _encode_MessageID(value.messageID, $.BER),
        _encode_LDAPMessage_protocolOp(value.protocolOp, $.BER),
    ];
    if (value.controls?.length) {
        const c = $._encode_implicit(
            _TagClass.context,
            0,
            () => _encode_Controls,
            $.BER
        )(value.controls, $.BER);
        components.push(c);
    }
    components.push(...value._unrecognizedExtensionsList ?? []);
    return $._encodeSequence(components, $.BER);
}

/* END_OF_SYMBOL_DEFINITION _encode_LDAPMessage */

/* eslint-enable */
